import React from 'react'
import { Container, Img } from '../styles/CheckoutItem.styles'

const CheckoutItem = ({ checkoutItem }) => {
  console.log(checkoutItem)
  return (
    <Container>
      <Img src={checkoutItem.imageOne} />
      <p>{checkoutItem.name}</p>
      <p>{"$" + checkoutItem.price}</p>
    </Container>
  )
}

export default CheckoutItem