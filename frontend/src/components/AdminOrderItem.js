import React from 'react'
import { Container, OrderItemsContainer, OrderItem, Image } from '../styles/AdminOrderItem.styles'
import apiUrl from '../apiConfig'

const AdminOrderItem = ({ item }) => {
  return (
    <Container>
      <h3>Order item: {item._id}</h3>
      <p>Order date: {item.createdAt.substring(0, 10)}</p>
      <p>{`User: ${item.user}`}</p>
      <p>{`Paid: ${item.isPaid.toString()}`}</p>
      <p>{`Delivered: ${item.isDelivered.toString()}`}</p>
      <p>{`tax: $${item.taxPrice}`}</p>
      <p>{`shipping: $${item.shippingPrice}`}</p>
      <p>{`total: $${item.totalPrice}`}</p>
      <OrderItemsContainer>
        <h4>Items:</h4>
        {item.orderItems.map((order) => (
          <OrderItem>
            <Image src={apiUrl + "/" + order.image} />
            <p>{order.name}</p>
            <p>{"qty: " + order.quantity}</p>
            <h4>{"$" + order.price}</h4>
          </OrderItem>
        ))}
      </OrderItemsContainer>
    </Container>
  )
}

export default AdminOrderItem