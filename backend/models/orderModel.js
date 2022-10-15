const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'User'
  },
  orderItems: [], 
  shippingAddress: {}, 
  paymentMethod: {
    type: String, 
    required: true
  }, 
  taxPrice: {
    type: Number, 
    required: true, 
    default: 0.0
  },
  shippingPrice: {
    type: Number, 
    required: true, 
    default: 0.0
  },
  totalPrice: {
    type: Number, 
    required: true, 
    default: 0.0
  },
  isPaid: {
    type: Boolean, 
    required: true, 
    default: false
  }, 
  paidAt: {
    type: Date,
  }, 
  isDelivered: {
    type: Boolean,
    required: true, 
    default: false
  }, 
  deliveredAt: {
    type: String, 
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
