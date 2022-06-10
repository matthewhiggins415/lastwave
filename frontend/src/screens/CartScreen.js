import React from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from '../styles/CartScreen.styles'

const CartScreen = ({ user }) => {
  if (!user) {
    return <Navigate to="/login"/>
  }

  return (
    <Container>CartScreen</Container>
  )
}

export default CartScreen