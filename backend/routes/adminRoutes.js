const express = require('express')
const router = express.Router()
const passport = require('passport')

const Product = require('../models/productModel')
const User = require('../models/userModel')

const requireToken = passport.authenticate('bearer', { session: false })


// check if admin 


// get all users 
router.get('/admin/users', requireToken, (req, res, next) => {
    User.find()
      .then(users => {
        return users.map(user => user.toObject())
      })
      .then(users => res.status(200).json({ users: users }))
      .catch(next)
})

// get all products 

// get all orders 

module.exports = router