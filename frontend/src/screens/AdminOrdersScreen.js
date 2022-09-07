import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { adminGetAllOrders } from '../api/admin/orders'
import { Container, NumsContainer, NumsDiv, ControlsDiv, ControlBtn} from '../styles/AdminOrderScreen.styles'
import OrderItem from '../components/OrderItem'

const AdminOrdersScreen = ({user, notify}) => {
  const [orders, setOrders] = useState([])
  const [allTime, setAllTime] = useState(0)

  useEffect(() => {
    const fetchOrders = async () => {
      let res = await adminGetAllOrders(user)
      setOrders(res.data.orders)
      setAllTime(res.data.orders.length)
    }

    fetchOrders()
  }, [])

  if (!user.isAdmin) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  return (
    <Container>
      <NumsContainer>
        <NumsDiv>
          <h2>Today</h2>
        </NumsDiv>
        <NumsDiv>
          <h2>Week</h2>
        </NumsDiv>
        <NumsDiv>
          <h2>Month</h2>
        </NumsDiv>
        <NumsDiv>
          <h2>All Time</h2>
          <h2>{allTime}</h2>
        </NumsDiv>
      </NumsContainer>
      <ControlsDiv>
        <ControlBtn>latest</ControlBtn>
        <ControlBtn>↑ amount</ControlBtn>
        <ControlBtn>all orders</ControlBtn>
        <ControlBtn>not shipped</ControlBtn>
        <ControlBtn>shipped</ControlBtn>
      </ControlsDiv>
      { orders ? orders.map((item, index) => <OrderItem index={index} item={item} key={index}/>) : null }
    </Container>
  )
}

export default AdminOrdersScreen