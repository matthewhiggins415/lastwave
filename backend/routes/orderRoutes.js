const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const errors = require('../lib/custom_errors')

const handle404 = errors.handle404

const Order = require('../models/orderModel')
const User = require('../models/userModel')


// create new order 
// POST /api/orders
// protected 
router.post('/order', requireToken, async (req, res, next) => {
  let userID = req.user.id
  console.log(userID)
  let user = await User.findById(userID)
  console.log(user)
})

router.get('/orders', requireToken, async (req, res, next) => {
  let userID = req.user.id
  console.log(userID)
  let user = await User.findById(userID)
  console.log(user)
})

module.exports = router