import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Container, ProductDetailsContainer, ProductDetails, DetailContainer, Image, BackBtn, CheckoutBtn } from '../styles/ProductScreen.styles'

const ProductScreen = ({ user, notify }) => {
  let { id } = useParams()
  
  let navigate = useNavigate()

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await axios.get(`/products/${id}`)
      setProduct(res.data.product)
    }

    fetchProduct()
  }, [])

  const addToCart = (product) => {    
    if (user) {
      notify('item added to cart')
    } else {
      navigate('/login')
      notify('not logged in', 'danger')
    }
    // add product to user.cart Array 
    // if user is not true redirect to login? 

  }

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
          <CheckoutBtn onClick={() => addToCart(product)}>Add to Cart</CheckoutBtn>
        </ProductDetails>
      </ProductDetailsContainer>
    </Container>
  )
}

export default ProductScreen