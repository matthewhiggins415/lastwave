import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleOrder } from '../api/order'
import { Container, OrderDetailsSummaryContainer, SummaryDiv } from '../styles/OrderItemScreen.styles'
 
const OrderItemScreen = ({ user, notify }) => {
  const { id } = useParams()
  const [order, setOrder] = useState({})
  const [createdAt, setCreatedAt] = useState('')
  
  useEffect(() => {
    const fetchOrder = async () => {
      let res = await getSingleOrder(user, id)
      console.log("order:", res.data.order)
      setOrder(res.data.order)
      let date = res.data.order.createdAt.substring(0, 10)
      setCreatedAt(date)
    }  

    fetchOrder()
  }, [])

  return (
    <Container>
      <h2>{`View order details:`}</h2>
      <OrderDetailsSummaryContainer>
        <SummaryDiv>
          <p>Order Date:</p> 
          <p>{createdAt}</p>
        </SummaryDiv>
        <SummaryDiv>
          <p>Order #:</p>   
          <p>{order._id}</p>
        </SummaryDiv>
        <SummaryDiv>
          <p>Order Total:</p>  
          <p>{"$" + order.totalPrice}</p>
        </SummaryDiv>
      </OrderDetailsSummaryContainer>
    </Container>
  )
}

export default OrderItemScreen