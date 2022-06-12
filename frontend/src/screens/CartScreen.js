import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from '../styles/CartScreen.styles'
import CartItem from '../components/CartItem'

const CartScreen = ({ user, notify }) => {
  if (!user) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <div>
        <p>Subtotal: </p>
        <p>$29.00</p>
      </div>
      <button>Proceed to Checkout</button>
      <div>


      </div>
    </Container>
  )
}

export default CartScreen