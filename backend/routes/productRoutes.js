import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// fetch all products 
// /api/products
// public
router.get('/', asyncHandler(async (req, res, next) => {
    // res.json || res.send will convert data to json automatically. 
    const products = await Product.find({})
    res.json(products)
}))

// fetch a single product 
// /api/products/:id
// public
router.get('/:id', asyncHandler(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (product) {
      res.json(product) 
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
}))


export default router 