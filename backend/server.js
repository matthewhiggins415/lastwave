const express = require('express')
const products = require('./data/products')

let app = express()

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

app.listen(5000, console.log(`app listening on port 5000`))
