import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, ProductDetailsContainer, ProductDetails, DetailContainer, Image, BackBtn, CheckoutBtn } from '../styles/ProductScreen.styles'

const ProductScreen = () => {
  let { id } = useParams()

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      let {data} = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [])

  return (
    <Container>
      <BackBtn to="/products">Go Back</BackBtn>
      <ProductDetailsContainer>
        <Image src={product.imageOne}/>
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