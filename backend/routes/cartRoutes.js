// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Product = require('../models/productModel')
const User = require('../models/userModel')
const Cart = require('../models/cartModal')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../lib/custom_errors')

// we'll use this function to send 404 when non-existent document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { product: { title: '', text: 'foo' } } -> { product: { text: 'foo' } }
// const removeBlanks = require('../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// Calculate the cart subtotal 
const calculateCart = (cart) => {
  let priceArr = []
  cart.forEach((item) => {
    priceArr.push(item.price)
  })

  let total = priceArr.reduce((preVal, curVal) => preVal + curVal, 0)
  return total
}

// NEW GET A CART FOR A USER 
router.get('/cart', requireToken, async (req, res, next) => {
  let userId = req.user.id    
  
  let cart = await Cart.findOne({ user: userId })
  console.log(cart)

  res.json({ cart })
})

// ADD AN ITEM 
router.post('/cart/:id', requireToken, async (req, res, next) => {
  let userId = req.user.id 
  let itemId = req.params.id

  let product = await Product.findById(itemId)
  console.log("product: ", product.id)

  let cart = await Cart.findOne({user: userId})

  const cartItem = {
    product: product.id, 
    name: product.name,
    image: product.imageOne,
    quantity: 1,
    price: product.price
  }

  let items = cart.items 

  if (items.some(e => e.product === product.id)) {
    res.json({ message: "item already in cart" })
  } else {
    items.push(cartItem)

    const newSubTotal = calculateCart(items)
    cart.subTotal = newSubTotal
    
    const updatedCart = await cart.save()
    res.json({ updatedCart })
  }
})

// ADD QTY OF AN ITEM 

// REMOVE QTY OF AN ITEM 

// REMOVE AN ITEM 
router.patch('/cart/:id', requireToken, async (req, res, next) => {
  let userId = req.user.id 
  let itemId = req.params.id 

  let product = await Product.findById(itemId)
  let productId = product._id.toString()
  let cart = await Cart.findOne({user: userId})

  let items = cart.items 

  if (items.some(e => e.product === productId)) {
    let result = items.filter((n) => {
      return n.product !== itemId
    })

    cart.items = result 

    const newSubTotal = calculateCart(cart.items)
    cart.subTotal = newSubTotal

    cart.markModified("items");
    const updatedCart = await cart.save()
    res.json({ updatedCart })
  } else {
    res.json({ message: "item not in cart" })
  }
})

// CLEAR CART 
router.delete('/cart', requireToken, async (req, res, next) => {
  let userId = req.user.id
  let cart = await Cart.findOne({ user: userId })
  console.log(cart)

  cart.items.length = 0 
  cart.subTotal = 0
  cart.markModified("items");
  const updatedCart = await cart.save()
  res.json({ updatedCart })
})

module.exports = router