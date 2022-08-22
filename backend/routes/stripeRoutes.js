const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const errors = require('../lib/custom_errors')

const handle404 = errors.handle404

const Order = require('../models/orderModel')
const User = require('../models/userModel')
const Cart = require('../models/cartModal')

const stripeAPI = require('../utils/stripe')

// const webhook = require('../utils/webhook')

router.post('/create-payment-intent', requireToken, async (req, res) => {
  let userId = req.user.id

  let cart = await Cart.findOne({user: userId})
  let total = cart.total * 100

  let user = await User.findById(userId)
  let receipt_email = user.email
  let shipping = user.shipping
  
  try { 
    paymentIntent = await stripeAPI.paymentIntents.create({
      amount: total, 
      currency: 'usd', 
      payment_method_types: ['card'],
      receipt_email, 
      shipping
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch(error) {
    console.log(error)
    res.status(400).json({ message: "an error occured, unable to create payment intent."})
  }
})

// router.post('/webhook', webhook)

module.exports = router