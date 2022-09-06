import React, { useState, useEffect } from 'react'
import { Container, Button, DeleteButton } from '../styles/AdminCustomer.styles'
import { useNavigate } from 'react-router-dom'

const AdminCustomer = ({ user, index, handleDeleteUser }) => {
  const [date, setDate] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    const renderDate = () => {
      let originalDate = user.createdAt
      let justDate = originalDate.split('T')[0]
      let dates = justDate.split('-')
      let year = dates[0]
      let month = dates[1]
      let day = dates[2]
  
      setDate(`${month}/${day}/${year}`)
    }

    renderDate()
  }, [])

  const navigateToEdit = () => {
    navigate(`/admin/customers/${user._id}`)
  }

  return (
    <Container>
        <p>{index + 1 + "."}</p>
        <p>{date}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{String(user.isAdmin)}</p>
        <Button onClick={navigateToEdit}>edit</Button>
        <DeleteButton onClick={() => { handleDeleteUser(user._id) }}>delete</DeleteButton>
    </Container>
  )
}

export default AdminCustomer