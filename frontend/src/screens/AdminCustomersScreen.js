import React, { useState, useEffect } from 'react'
import { getCustomers } from '../api/admin/customers'
import { Navigate } from 'react-router-dom'
import { Container, H1, Header, H2 } from '../styles/AdminCustomersScreen.styles'
import AdminCustomer from '../components/AdminCustomer'

const AdminCustomersScreen = ({ user, notify }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await getCustomers(user)
        console.log(res)
        setUsers(res.data.users)
      } catch(error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])

  if (!user.isAdmin) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  return (
    <Container>
      <H1>Amin Users Screen</H1>
      <Header>
        <H2>Created At</H2>
        <H2>Name</H2>
        <H2>Email</H2>
        <H2>Admin</H2>
      </Header>
      <div>
        {users.map((user) => (
          <AdminCustomer user={user} key={user._id}/>
        ))}
      </div>
    </Container>
  )
}

export default AdminCustomersScreen