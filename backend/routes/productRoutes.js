const express = require('express')
const router = express.Router()

const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

// pull in error types and the logic to handle them and set status codes
const errors = require('../lib/custom_errors')

const handle404 = errors.handle404

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

// read all products
router.get('/products', (req, res, next) => {
  Product.find()
    .then(products => {
      // `products` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return products.map(product => product.toObject())
    })
    // respond with status 200 and JSON of the products
    .then(products => res.status(200).json({ products: products }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// get a single product 
router.get('/products/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Product.findById(req.params.id)
    .then(handle404)
    // if `findById` is successful, respond with 200 and "example" JSON
    .then(product => res.status(200).json({ product: product.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// edit a product 

// delete a product 

module.exports = router 
