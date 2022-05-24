import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

let app = express()

connectDB()

app.get('/', (req, res) => {
    res.send('API is up and running.')
})

app.get('/api/products', (req, res, next) => {
    // res.json || res.send will convert data to json automatically. 
    res.json(products)
})

app.get('/api/products/:id', (req, res, next) => {
    let product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

let port = process.env.PORT || 5000

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold))
