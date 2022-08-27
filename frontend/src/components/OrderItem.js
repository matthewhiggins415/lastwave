import React from 'react'
import { Container } from '../styles/OrderItem.styles.js'

const OrderItem = ({ item }) => {
  console.log(item)
  return (
    <Container>
      <p>{item.paidAt}</p>
    </Container>
  )
}

export default OrderItem