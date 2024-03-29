import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ProductLink, Image, ProductAddContainer, AddToCart, ContainerLink } from '../styles/Product.styles'
import { addItemToCart } from '../api/cart'
import apiUrl from '../apiConfig'

const ProductDetail = ({ product, user, notify, id, setUser }) => {
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
      setUser(res.data.user)
      notify('item added to cart')
      navigate("/cart")
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }
  
  return (
    <ContainerLink to={`/product/${id}`}>
    <Container>
      <Image src={apiUrl + "/" + product.imageOne} alt={product.name} />
      <ProductLink to={`/product/${id}`}>
        <h2>
          {product.name.length > 16 ? product.name.substring(0, 14) + '...': product.name}
        </h2>
      </ProductLink>
      <div>
        <p>4.9 &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</p>
      </div>
      <ProductLink to={`/product/${id}`}>
        <h2>{`$${product.price}`}</h2>
      </ProductLink>
      <div>
        <p>24 sold</p>
      </div>
      <AddToCart onClick={handleClick}>Add to cart</AddToCart>
    </Container>
    </ContainerLink>
  )
}

export default ProductDetail