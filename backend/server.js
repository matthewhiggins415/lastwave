const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
// const cors = require('cors') - no need for cors here. 
require("dotenv").config()

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
      useUnifiedTopology: true,
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

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is up and running.')
})

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
console.log(__dirname)

// register passport authentication middleware
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
