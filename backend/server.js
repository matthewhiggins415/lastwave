const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
// const cors = require('cors') - no need for cors here. 
const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');

const User = require('./models/userModel')
const Cart = require('./models/cartModal')
const Order = require('./models/orderModel')

//require routes files
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
const adminRoutes = require('./routes/adminRoutes')
const orderRoutes = require('./routes/orderRoutes')
const stripeRoutes = require('./routes/stripeRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

const path = require("path")

// require middleware 
const errorHandler = require('./lib/error_handler.js')

// require configured passport authentication middleware
const auth = require('./lib/auth.js')

// require database configuration logic
const db = require('./config/db')

const stripeAPI = require('./utils/stripe')

// establish database connection
// use new version of URL parser
// use createIndex instead of deprecated ensureIndex
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch(error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

connectDB()

const app = express()

app.use(cors({
  origin: 'https://www.thesimplecat.com'
}));

const endpointSecret = 'whsec_6ff242a04c62d65b6428b10aa37a91d15ad63e64110179f7d3279762006f842f'
// const endpointSecret = 'whsec_A056lEY8NhVavdONtxjxC6YbiVqR2zsI'

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  let event = req.body;
  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse

  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = req.headers['stripe-signature'];
    try {
      event = stripeAPI.webhooks.constructEvent(
        req.body,
        signature,
        endpointSecret
      );
      console.log(event)
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }
  }

  // Handle the event
  async function trySwitch(status) {
    switch (event.type) {
    case 'payment_intent.created':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_intent.succeeded':
      const paymentMethod = event.data.object;
      console.log("payment method!! It fuckin works", paymentMethod)
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    case 'charge.succeeded':
      const objectThing = event.data.object.receipt_email;
      let user = await User.findOne({ email: event.data.object.receipt_email })
      let userID = user._id.toString()
      let cart = await Cart.findOne({ user: userID })
      console.log('charge succeed webhook fired!!')
      let today = new Date().toISOString().slice(0, 10)

      const order = new Order({
        user: userID, 
        orderItems: cart.items,
        shippingAddress: user.shippingAddress,
        paymentMethod: 'Stripe', 
        taxPrice: cart.tax,
        shippingPrice: cart.shippingCost, 
        totalPrice: cart.total,
        isPaid: true,
        paidAt: today,
        isDelivered: false
      })
    
      const createdOrder = await order.save()

      cart.items.length = 0 
      cart.subTotal = 0
      cart.total = 0
      cart.markModified("items");

      const updatedCart = await cart.save()
      
      res.status(201)
      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
    }
  }
  
  trySwitch('charge.succeeded')
  // Return a 200 response to acknowledge receipt of the event
  res.status(200);
  console.log("hello")
})

app.use(express.json({
  verify: (req, res, buffer) => req['rawBody'] = buffer, 
}))

app.get('/', (req, res) => {
  res.json({ message: `here's process.env.NODE_ENV: ${process.env.NODE_ENV}` })
})

app.use('/uploads', express.static(path.join(__dirname, './uploads')));

// register passport authentication middlewar
app.use(auth)

app.use(productRoutes)
app.use(userRoutes)
app.use(cartRoutes)
app.use(adminRoutes)
app.use(orderRoutes)
app.use(stripeRoutes)
app.use(uploadRoutes)

let port = process.env.PORT || 5000

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold))
