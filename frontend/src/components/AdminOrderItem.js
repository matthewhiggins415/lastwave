import React from 'react'
import { Container } from '../styles/AdminOrderItem.styles'

const AdminOrderItem = ({ item }) => {

    console.log(item)
  return (
    <Container>
      <p>Order item</p>
      <p>{item.createdAt.substring(0, 10)}</p>
      <p>{`Paid: ${item.isPaid.toString()}`}</p>
      <p>{`Delivered: ${item.isDelivered.toString()}`}</p>
      <p></p>
    </Container>
  )
}

export default AdminOrderItem