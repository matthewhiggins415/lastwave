const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const errors = require('../lib/custom_errors')

const handle404 = errors.handle404

const Order = require('../models/orderModel')
const User = require('../models/userModel')

const stripe = require("stripe")('sk_test_51LBLr0CIa15tYhSsSm7MYX92C3Bn2xGYETbChWUeVDdxZoe1TWpTdAgjsBXx46pfORrXqkYpzXZ9KYcXxg7and8K00MAxZTHzh');


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
  

  router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

  module.exports = router