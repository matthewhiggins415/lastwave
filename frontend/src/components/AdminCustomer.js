import React from 'react'
import { Container } from '../styles/AdminCustomer.styles'

const AdminCustomer = ({ user }) => {
  return (
    <Container>
        <p>{user.createdAt}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{String(user.isAdmin)}</p>
    </Container>
  )
}

export default AdminCustomer