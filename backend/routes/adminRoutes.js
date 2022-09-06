const express = require('express')
const router = express.Router()

const Product = require('../models/productModel')
const User = require('../models/userModel')
const Order = require('../models/orderModel')

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

// get all users 
router.get('/admin/users', requireToken, (req, res, next) => {
    User.find()
      .then(users => {
        return users.map(user => user.toObject())
      })
      .then(users => res.status(200).json({ users: users }))
      .catch(next)
})

// get a single user as an admin
router.get('/admin/users/:id', requireToken, async (req, res, next) => {
  let userId = req.params.id
  let user = await User.findById(userId)

  res.json({ user })
})

// Delete a user 
router.delete("/admin/users/:id", requireToken, async (req, res, next) => {
  let userID = req.user.id
  let admin = await User.findById(userID)

  let ID = req.params.id
  let user = await User.findById(ID)

  if (admin.isAdmin && user) {
    await user.remove()
    let users = await User.find()
    res.json({ users })
  } else if (user.isAdmin && !user) {
    throw new Error("Product is not found")
  } else {
    throw new Error("User is not admin")
  }
})


// get all orders of a single user
router.get('/admin/orders/:id', requireToken, async (req, res, next) => {
  let customerID = req.params.id

  if (req.user.isAdmin) {
    try {
      let orders = await Order.find({ user: customerID })
      
      if (orders.length >= 1) {
        res.json({ orders })
      } else {
        res.json({ message: 'you have no orders' })
      }
    } catch (e) {
      console.log(e)
    }
  }

  else res.json({ message: "not admin" })
})

// get all orders of all users
router.get('/admin/orders', requireToken, async (req, res, next) => {
  try {
    let orders = await Order.find()

    if (orders.length >= 1) {
      res.json({ orders })
    } else {
      res.json({ message: 'you have no orders' })
    }
  } catch (e) {
    console.log(e)
  }
})

// create a product 
router.post("/admin/product", requireToken, async (req, res, next) => {
  let userID = req.user.id
  console.log(userID)
  let user = await User.findById(userID)
  console.log(user)

  const product = new Product({
    user: req.user.id,
    name: "sample", 
    imageOne: "/images/sample1.jpg", 
    imageTwo: "/images/sample2.jpg",
    description: "sample description", 
    category: 'none', 
    price: 10,
    countInStock: 0, 
    brand: "sample brand"
  })

  const createdProduct = await product.save()
  res.status(201).json({ createdProduct })
})

// update a product 
router.patch("/admin/product/:id", requireToken, async (req, res, next) => {
  let userID = req.user.id
  let ID = req.params.id
  
  let user = await User.findById(userID)
  console.log('editing a product: user is: ', user)

  const reqProduct = req.body.product
  console.log("updated product info:", reqProduct)

  let product = await Product.findById(ID)
  console.log("original product: ", product)
  
  if (product && user.isAdmin === true) { 
    product.user = req.params.id
    product.name = reqProduct.name
    product.imageOne = reqProduct.imageOne
    product.imageTwo = reqProduct.imageTwo
    product.description = reqProduct.description
    product.category = reqProduct.category
    product.price = reqProduct.price
    product.countInStock = reqProduct.countInStock

    const updatedProduct = await product.save()
    res.json({ updatedProduct })
  } else if (user.isAdmin === false) {
    throw new Error("User is not admin")
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// delete a product 
router.delete("/admin/product/:id", requireToken, async (req, res, next) => {
  let userID = req.user.id
  console.log(userID)
  let user = await User.findById(userID)
  console.log(user)

  let ID = req.params.id
  let product = await Product.findById(ID)

  if (user.isAdmin && product) {
    await product.remove()
    let products = await Product.find()
    res.json({ products })
  } else if (user.isAdmin && !product) {
    throw new Error("Product is not found")
  } else {
    throw new Error("User is not admin")
  }
})

// hey good work brotha 

module.exports = router