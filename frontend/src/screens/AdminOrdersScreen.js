import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminOrdersScreen = ({user, notify}) => {

  if (!user.isAdmin) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  return (
    <div>AdminOrdersScreen</div>
  )
}

export default AdminOrdersScreen