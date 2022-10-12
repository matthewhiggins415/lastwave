const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, 
      ref: 'User'
    }, 
    name: {
      type: String, 
      required: true
    }, 
    imageOne: {
      type: String, 
      required: true
    }, 
    imageTwo: {
      type: String, 
      required: true
    }, 
    imageThree: {
      type: String, 
      required: true
    }, 
    imageFour: {
      type: String, 
      required: true
    }, 
    description: {
      type: String, 
      required: true
    }, 
    category: { 
      type: String, 
      required: true
    }, 
    price: {
      type: Number, 
      required: true, 
      default: 0
    }, 
    countInStock: {
      type: Number, 
      required: true, 
      default: 0
    }, 
    numOfOrders: {
      type: Number, 
      default: 57
    },
    numOfReviews: {
      type: Number, 
      default: 13
    }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
