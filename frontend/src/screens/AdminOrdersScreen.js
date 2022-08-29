import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { adminGetAllOrders } from '../api/admin/orders'

const AdminOrdersScreen = ({user, notify}) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      let res = await adminGetAllOrders(user)
      setOrders(res.data.orders)
    }

    fetchOrders()
  }, [])

  if (!user.isAdmin) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  return (
    <>
    <div>AdminOrdersScreen</div>
    { orders ? orders.map(item => <p>{item._id}</p>) : null }
    </>
  )
}

export default AdminOrdersScreen