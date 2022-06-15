import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import axios from 'axios'
import { Container, H1, ProductsContainer } from '../styles/ProductsScreen.styles'
// import { v4 as uuidv4 } from 'uuid';

const ProductsScreen = ({ user, notify, setUser }) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async() => {
      let { data } = await axios.get('/products')
      setProducts(data.products)
    }
    fetchProducts()
  }, [])

  // The dependencies parameter is reserved for any value that you wish to fire off the useEffect


  // eaxch item needs a unique key value in order to be removed properly. 
  return (
    <Container>
      <H1>Products</H1>
      <ProductsContainer>
        {products.map((product, index) => (
          <Product setUser={setUser} user={user} product={product} notify={notify} key={index + 1} id={product._id}/>
        ))}
      </ProductsContainer>
    </Container>
  )}

export default ProductsScreen