import React from 'react'
import { Container, OrderLink } from '../styles/OrderItem.styles.js'

const OrderItem = ({ item, index }) => {
  console.log(item)
  const updatedDate = item.paidAt.substring(0, 10)

  return (
    <Container>
      <p>{index + 1}</p>
      <p>{updatedDate}</p>
      <p>{item._id}</p>
      <OrderLink to={`/order/${item._id}`}>details</OrderLink>
    </Container>
  )
}

export default OrderItem