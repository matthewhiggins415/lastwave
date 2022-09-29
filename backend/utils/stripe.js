const stripeAPI = require('stripe')(process.env.REACT_APP_STRIPE_LIVE_KEY)

module.exports = stripeAPI 