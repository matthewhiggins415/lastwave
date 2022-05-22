import React from 'react'
import products from '../products'
import Product from '../components/Product'
import { Container, H1, ProductsContainer } from '../styles/ProductsScreen.styles'

const ProductsScreen = () => {
  return (
    <Container>
      <H1>Products</H1>
      <ProductsContainer>
        {products.map((product) => (
          <Product product={product}/>
        ))}
      </ProductsContainer>
    </Container>
  )}

export default ProductsScreen