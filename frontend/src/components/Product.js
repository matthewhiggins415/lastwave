import React from 'react'
import { Navigate } from 'react-router-dom'
import { Container, ProductLink, Image, ProductAddContainer, AddToCart } from '../styles/Product.styles'

const Product = ({ product, user, notify }) => {

  const addToCart = () => {
    console.log('hello')
  }
  
  return (
    <Container>
      <Image src={product.imageOne} alt={product.name} />
      <ProductLink to={`/product/${product._id}`}>
        <h2>{product.name}</h2>
      </ProductLink>
      <ProductAddContainer>
        <ProductLink to={`/product/${product._id}`}>
          <h2>{`$${product.price}`}</h2>
        </ProductLink>
        <AddToCart onClick={addToCart}>Add to cart</AddToCart>
      </ProductAddContainer>
    </Container>
  )
}

export default Product