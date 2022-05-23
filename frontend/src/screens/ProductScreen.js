import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import { Container, ProductDetailsContainer, ProductDetails, DetailContainer, Image, BackBtn, CheckoutBtn } from '../styles/ProductScreen.styles'

const ProductScreen = () => {
  let { id } = useParams()
  const product = products.find(p => p._id === id)
  return (
    <Container>
      <BackBtn to="/products">Go Back</BackBtn>
      <ProductDetailsContainer>
        <Image src={product.image}/>
        <ProductDetails>
          <DetailContainer>
            <h1>{product.name}</h1>
          </DetailContainer>
          <DetailContainer>
            <h3>{product.description}</h3>
          </DetailContainer>
          <DetailContainer>
            <h2>{`Price: $${product.price}`}</h2>
          </DetailContainer>
          <CheckoutBtn>Add to Cart</CheckoutBtn>
        </ProductDetails>
      </ProductDetailsContainer>
    </Container>
  )
}

export default ProductScreen