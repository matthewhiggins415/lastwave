import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getAUser } from '../../src/api/admin/customers'
import { adminGetOrders } from '../../src/api/admin/orders'
import AdminOrderItem from '../components/AdminOrderItem'
import { Container, InfoContainer } from '../styles/AdminCustomerEditScreen.styles'

const AdminCustomerEditScreen = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()
  const [customer, setCustomer] = useState({})
  const [cart, setCart] = useState({})
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getAUser(user, id)
      setCustomer(res.data.user)
    }

    const fetchOrders = async () => {
      const res = await adminGetOrders(user, id)
      setOrders(res.data.orders)
    }

    // const fetchCart = async () => {
    //   const res = await 
    // }

    fetchUser()
    fetchOrders()
    // fetchCart()
  }, [])

  return (
    <Container>
      <InfoContainer>
        <h2>User Info</h2>
        <div>
          <div>
            <p>{customer._id}</p>
            <p>{customer.name}</p>
            <p>{customer.email}</p>
            <p>{customer.isAdmin}</p>
          </div>
            { customer.shippingAddress ? <div>
            <p>{customer.shippingAddress.address}</p>
            <p>{customer.shippingAddress.unit}</p>
            <p>{customer.shippingAddress.city}</p>
            <p>{customer.shippingAddress.state}</p>
            <p>{customer.shippingAddress.country}</p>
            <p>{customer.shippingAddress.zip}</p> </div>
            : 'user has no address yet' }
        </div>
      </InfoContainer>
      <InfoContainer>
        <h2>User Orders</h2>
        { orders ? orders.map((item, index) => <AdminOrderItem item={item} key={index}/>) : <p>No orders</p> }
      </InfoContainer>
      <InfoContainer>
        <h2>User Active Cart</h2>
      </InfoContainer>
    </Container>
  )
}

export default AdminCustomerEditScreen