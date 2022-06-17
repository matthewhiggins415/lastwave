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
      <H1>Admin Users</H1>
      
        {users.map((user, index) => (
          <AdminCustomer user={user} key={index + 1} index={index} />
        ))}
      
    </Container>
  )
}

export default AdminCustomersScreen