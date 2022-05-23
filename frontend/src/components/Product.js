import React from 'react'
import { Container, ProductLink, Image, ProductAddContainer, AddToCart } from '../styles/Product.styles'

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <ProductLink to={`/product/${product._id}`}>
        <h2>{product.name}</h2>
      </ProductLink>
      <ProductAddContainer>
        <ProductLink to={`/product/${product._id}`}>
          <h2>{`$${product.price}`}</h2>
        </ProductLink>
        <AddToCart>Add to cart</AddToCart>
      </ProductAddContainer>
    </Container>
  )
}

export default Product