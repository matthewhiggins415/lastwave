import React from 'react'
import { Container, ProductLink } from '../styles/Product.styles'

const Product = ({ product }) => {
  return (
    <Container>
      <img src={product.image}/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </Container>
  )
}

export default Product