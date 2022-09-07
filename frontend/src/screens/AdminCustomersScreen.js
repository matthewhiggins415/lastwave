import React, { useState, useEffect } from 'react'
import { getCustomers, deleteAUser } from '../api/admin/customers'
import { Navigate } from 'react-router-dom'
import { Container, H1, Header, H2, NumContainer, StatsSection } from '../styles/AdminCustomersScreen.styles'
import AdminCustomer from '../components/AdminCustomer'

const AdminCustomersScreen = ({ user, notify }) => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)
  const [adminCount, setAdminCount] = useState(0)
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await getCustomers(user)
        console.log(res)
        setUsers(res.data.users)
        setCount(res.data.users.length)

        let admins = res.data.users.filter(customer => {
          return customer.isAdmin === true
        })

        if (admins) {
          setAdminCount(admins.length)
        }
      } catch(error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])
  
  const handleDeleteUser = async (id) => {
    console.log(user)
    let res = await deleteAUser(user, id)
    setUsers(res.data.users)
    setCount(res.data.users.length)
    console.log(res)
    notify('customer deleted')
  }

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
          <h2>Admins</h2>
          <h2>{adminCount}</h2>
        </NumContainer>
      </StatsSection>
        {users.map((user, index) => (
          <AdminCustomer user={user} key={index + 1} index={index} handleDeleteUser={handleDeleteUser}/>
        ))}
      
    </Container>
  )
}

export default AdminCustomersScreen