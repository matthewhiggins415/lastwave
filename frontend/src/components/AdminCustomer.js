import React, { useState, useEffect } from 'react'
import { Container, H1 } from '../styles/AdminCustomer.styles'

const AdminCustomer = ({ user, index }) => {
  const [date, setDate] = useState('')

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


  return (
    <Container>
        <p>{index + 1 + "."}</p>
        <p>{date}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{String(user.isAdmin)}</p>
        <button onClick={() => console.log('edit clicked')}>edit</button>
        <button>delete</button>
    </Container>
  )
}

export default AdminCustomer