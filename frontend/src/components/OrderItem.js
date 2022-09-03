import React from 'react'
import { Container, OrderLink } from '../styles/OrderItem.styles.js'

const OrderItem = ({ item }) => {
  console.log(item)
  const updatedDate = item.paidAt.substring(0, 10)

  return (
    <Container>
      <p>{updatedDate}</p>
      <OrderLink to={`/order/${item._id}`}>details</OrderLink>
    </Container>
  )
}

export default OrderItem