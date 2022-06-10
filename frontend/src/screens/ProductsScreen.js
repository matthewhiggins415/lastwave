import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import axios from 'axios'
import { Container, H1, ProductsContainer } from '../styles/ProductsScreen.styles'

const ProductsScreen = ({ user, notify }) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async() => {
      let { data } = await axios.get('/products')
      setProducts(data.products)
    }
    fetchProducts()
  }, [])

  // The dependencies parameter is reserved for any value that you wish to fire off the useEffect

  return (
    <Container>
      <H1>Products</H1>
      <ProductsContainer>
        {products.map((product) => (
          <Product user={user} product={product} notify={notify} key={product._id}/>
        ))}
      </ProductsContainer>
    </Container>
  )}

export default ProductsScreen