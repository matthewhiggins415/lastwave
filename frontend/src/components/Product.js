import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ProductLink, Image, ProductAddContainer, AddToCart } from '../styles/Product.styles'
import { addItemToCart } from '../api/cart'

const Product = ({ product, user, notify, id, setUser }) => {
  let navigate = useNavigate()

  const handleClick = () => {
    if (user && user.isAdmin) {
      notify('signed in as admin', 'warning')
    } else if (user) {
      addToCart()
    } else {
      notify('not logged in', 'danger')
      navigate("/register")
    }
  }
 
  const addToCart = async () => {
    try {
      let res = await addItemToCart(user, id)
      console.log("added to cart:", res)
      // setUser(res.data.user)
      notify('item added to cart')
      // navigate("/cart")
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }
  
  return (
    <Container>
      <Image src={"https://lastwave-ecommerce.herokuapp.com/" + product.imageOne} alt={product.name} />
      <ProductLink to={`/product/${id}`}>
        <h2>{product.name}</h2>
      </ProductLink>
      <ProductLink to={`/product/${id}`}>
        <h2>{`$${product.price}`}</h2>
      </ProductLink>
      <AddToCart onClick={handleClick}>Add to cart</AddToCart>
    </Container>
  )
}

export default Product