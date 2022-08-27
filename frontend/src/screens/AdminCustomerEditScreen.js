import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getAUser } from '../../src/api/admin/customers'
import { Container, InfoContainer } from '../styles/AdminCustomerEditScreen.styles'

const AdminCustomerEditScreen = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()
  const [customer, setCustomer] = useState({})
  const [cart, setCart] = useState({})
  const [orders, setOrders] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getAUser(user, id)
      console.log("res", res)
      setCustomer(res.data.user)
    }

    // const fetchCart = async () => {
    //   const res = await 
    // }

    fetchUser()
    // fetchCart()
  }, [])

  console.log('user:', user)

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
      </InfoContainer>
      <InfoContainer>
        <h2>User Active Cart</h2>
      </InfoContainer>
    </Container>
  )
}

export default AdminCustomerEditScreen