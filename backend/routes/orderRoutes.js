const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const errors = require('../lib/custom_errors')

const handle404 = errors.handle404

const Order = require('../models/orderModel')
const User = require('../models/userModel')
const Cart = require('../models/cartModal')


// create new order as a user
// POST /api/orders
// protected 

// * THIS STILL NEEDS FRONT END CALL THAT NEEDS TO BE PUT IN THE ORDER COMPLETE BUTTON * 
router.post('/order', requireToken, async (req, res, next) => {
  let userID = req.user.id
  console.log(userID)
  let user = await User.findById(userID)
  console.log(user)

  let cart = await Cart.findOne({ user: userID })
  console.log(cart)

  let today = new Date().toISOString().slice(0, 10)

  const order = new Order({
    user: userID, 
    orderItems: cart.items,
    shippingAddress: user.shippingAddress,
    paymentMethod: 'Stripe', 
    taxPrice: cart.tax,
    shippingPrice: cart.shippingCost, 
    totalPrice: cart.total,
    isPaid: true,
    paidAt: today,
    isDelivered: false
  })

  const createdOrder = await order.save()
  res.status(201).json({ createdOrder })
})

//get all my orders as a user 
router.get('/orders', requireToken, async (req, res, next) => {
  let userID = req.user.id

  console.log(userID)
  try {
    let orders = await Order.find({ user: userID })
    
    if (orders.length >= 1) {
      res.json({ orders })
    } else {
      res.json({ message: 'you have no orders' })
    }
  } catch (e) {
    console.log(e)
  }
})

// Get a single order as a user
router.get('/order/:id', requireToken, async (req, res, next) => {
  let userID = req.user.id
  let orderID = req.params.id

  try {
    let order = await Order.findById(orderID)

    if (order.user.toString() === userID) {
      res.json({ order })
    } else {
      res.json({ message: 'order not found' })
    }
  } catch(e) {
    console.log(e)
    res.json({ message: 'order not found'})
  }
})

// only admins can update orders :)




module.exports = router