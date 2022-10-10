const stripeAPI = require('stripe')(process.env.STRIPE_LIVE_KEY)

module.exports = stripeAPI 