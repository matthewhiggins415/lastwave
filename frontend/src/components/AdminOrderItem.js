import React from 'react'
import { Container, OrderItemsContainer, OrderItem, Image } from '../styles/AdminOrderItem.styles'

const AdminOrderItem = ({ item }) => {

    console.log(item)
  return (
    <Container>
      <h3>Order item: {item._id}</h3>
      <p>Order date: {item.createdAt.substring(0, 10)}</p>
      <p>{`Paid: ${item.isPaid.toString()}`}</p>
      <p>{`Delivered: ${item.isDelivered.toString()}`}</p>
      <OrderItemsContainer>
        <h4>Orders:</h4>
        {item.orderItems.map((order) => (
          <OrderItem>
            <Image src={"/" + order.image} />
            <p>{order.name}</p>
            <p>{"$" + order.price}</p>
          </OrderItem>
        ))}
      </OrderItemsContainer>
    </Container>
  )
}

export default AdminOrderItem