import React from 'react'
import { Container, Img } from '../styles/CheckoutItem.styles'

const CheckoutItem = ({ checkoutItem }) => {
  console.log("this be the checkout item, arg..", checkoutItem)
  return (
    <Container>
      <Img src={checkoutItem.image} />
      <p>{checkoutItem.name}</p>
      <p>{"(" + "x" + checkoutItem.quantity + ")"}</p>
      <p>{"$" + checkoutItem.price}</p>
    </Container>
  )
}

export default CheckoutItem