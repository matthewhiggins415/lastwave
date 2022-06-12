import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ProductLink, Image, ProductAddContainer, AddToCart } from '../styles/Product.styles'
import { addItemToCart } from '../api/cart'

const Product = ({ product, user, notify, id }) => {
  let navigate = useNavigate()

  const handleClick = () => {
    if (user && user.isAdmin) {
      notify('signed in as admin', 'warning')
    } else if (user) {
      addToCart()
    } else {
      notify('not logged in', 'danger')
      navigate("/login")
    }
  }

  const addToCart = async () => {
    try {
      let res = await addItemToCart(user, id)
      console.log(res)
      notify('item added to cart')
      navigate("/cart")
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
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
        <AddToCart onClick={handleClick}>Add to cart</AddToCart>
      </ProductAddContainer>
    </Container>
  )
}

export default Product