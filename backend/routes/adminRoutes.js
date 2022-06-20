const express = require('express')
const router = express.Router()

const Product = require('../models/productModel')
const User = require('../models/userModel')

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

// get all orders 

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

module.exports = router