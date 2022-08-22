const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    items: [],
    subTotal: {
      type: Number,
      required: true,
      default: 0
    }, 
    shippingCost: {
      type: Number, 
      required: true,
      default: 0
    }, 
    tax: {
      type: Number, 
      required: true, 
      default: 0
    },
    total: {
      type: Number, 
      required: true, 
      default: 0
    }
  }, {
  timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)