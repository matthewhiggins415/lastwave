const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    default: 'name'
  },
  email: {
    type: String, 
    required: true, 
    unique: true
  }, 
  cart:[],
  shippingAddress: {
    address: {type: String, default: 'none'}, 
    unit: {type: String, default: 'none'}, 
    city: {type: String, default: 'none'},
    state: {type: String, default: 'none'},
    country: {type: String, default: 'none'}, 
    zip: {type: String, default: 'none'}
  }, 
  isAdmin: {
    type: Boolean, 
    default: false
  }, 
  hashedPassword: {
    type: String, 
    required: true
  },
  token: String,
}, {
  timestamps: true, 
  toJSON: {
    // remove `hashedPassword` field when we call `.toJSON`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('User', userSchema)
