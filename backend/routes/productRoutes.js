const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const User = require('../models/userModel')
const Product = require('../models/productModel')

// fetch all products 
// /api/products
// public
// const getProducts = asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products)
// })

// fetch a single product 
// /api/products/:id
// public
// const getProductById = asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id)
    
//     if (product) {
//       res.json(product) 
//     } else {
//       res.status(404)
//       throw new Error('Product not found')
//     }
// })

// export {
//     getProducts, 
//     getProductById
// }

// Create a product
router.get('/products', requireToken, (req, res, next) => {
  let userID = req.user.id
  let products = Product.find({})
  res.json({ products })
})



// read all products 

// edit a product 

// delete a product 

module.exports = router 
