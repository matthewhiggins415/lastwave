import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Container, ProductDetailsContainer, ProductDetails, DetailContainer, Image, BackBtn, CheckoutBtn } from '../styles/ProductScreen.styles'
import { addItemToCart } from '../api/cart'
import apiUrl from '../apiConfig'

const ProductScreen = ({ user, notify, setUser }) => {
  let { id } = useParams()
  
  let navigate = useNavigate()

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      let res = await axios.get(`${apiUrl}/products/${id}`)
      setProduct(res.data.product)
      console.log(res.data.product)
    }

    fetchProduct()
  }, [])

  const handleClick = () => {   
    if (user && user.isAdmin) {
      notify('signed in as admin', 'warning')
    } else if (user) {
      addToCart()
    } else {
      navigate('/login')
      notify('not logged in', 'danger')
    }
  }

  const addToCart = async () => {
    try {
      let res = await addItemToCart(user, id)
      setUser(res.data.user)
      notify('item added to cart')
      navigate("/cart")
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  return (
    <Container>
      <BackBtn to="/products">Go Back</BackBtn>
      <ProductDetailsContainer>
        <Image src={apiUrl + "/" + product.imageOne}/>
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
          <CheckoutBtn onClick={() => {handleClick(user, id)}}>Add to Cart</CheckoutBtn>
        </ProductDetails>
      </ProductDetailsContainer>
    </Container>
  )
}

export default ProductScreen