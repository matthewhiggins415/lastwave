import React from 'react'
import { Container, Img } from '../styles/CheckoutItem.styles'

const CheckoutItem = ({ checkoutItem }) => {
  console.log("this be the checkout item, arg..", checkoutItem)
  return (
    <Container>
      <Img src={checkoutItem.imageOne} />
      <p>{checkoutItem.name}</p>
      <p>{"$" + checkoutItem.price}</p>
    </Container>
  )
}

export default CheckoutItem