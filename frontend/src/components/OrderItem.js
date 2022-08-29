import React from 'react'
import { Container, Button } from '../styles/OrderItem.styles.js'

const OrderItem = ({ item }) => {
  console.log(item)
  const updatedDate = item.paidAt.substring(0, 10)

  return (
    <Container>
      <p>{updatedDate}</p>
      <Button>details</Button>
    </Container>
  )
}

export default OrderItem