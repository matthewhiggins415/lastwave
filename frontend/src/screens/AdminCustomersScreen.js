import React, { useState, useEffect } from 'react'
import { getCustomers } from '../api/admin/customers'
import { Navigate } from 'react-router-dom'
import { Container, H1, Header, H2, NumContainer, StatsSection } from '../styles/AdminCustomersScreen.styles'
import AdminCustomer from '../components/AdminCustomer'

const AdminCustomersScreen = ({ user, notify }) => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await getCustomers(user)
        console.log(res)
        setUsers(res.data.users)
        setCount(res.data.users.length)
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
      <StatsSection>
        <NumContainer>
          <h2>Users</h2>
          <h2>{count}</h2>
        </NumContainer>
        <NumContainer>
          <h2>Regular Users</h2>
          <h2></h2>
        </NumContainer>
      </StatsSection>

      <H1>Users</H1>
        {users.map((user, index) => (
          <AdminCustomer user={user} key={index + 1} index={index} />
        ))}
      
    </Container>
  )
}

export default AdminCustomersScreen