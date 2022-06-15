import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, SubtotalContainer, CheckoutButton, H1, CartItemsContainer } from '../styles/CartScreen.styles'
import CartItem from '../components/CartItem'
import { getItemsInCart } from '../api/cart'
import { getUser } from '../api/auth'
 
const CartScreen = ({ user, notify, setUser }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0.0)
  const [toCheckout, setToCheckout] = useState(false)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let res = await getItemsInCart(user)
        let response = await getUser(user)
        setUser(response.data.user)
        setCartItems(res.data.cart)
        setCartTotal(res.data.totalCartCost)
      } catch (e) {
        console.log(e)
      }
    }

    fetchCart()
  }, [setUser])

  if (!user) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  if (toCheckout) {
    return <Navigate to="/checkout"/>
  }

  return (
    <Container>
      <H1>Shopping Cart</H1>
      <SubtotalContainer>
        <p>Subtotal: </p>
        <p>{cartTotal ? "$" + cartTotal : "$" + 0}</p>
      </SubtotalContainer>
      <CheckoutButton onClick={() => setToCheckout(!toCheckout)}>Proceed to Checkout</CheckoutButton>
      <CartItemsContainer>
        {cartItems.map((cartItem, index) => (
          <CartItem key={index + 1} cartItem={cartItem} setCartTotal={setCartTotal} setCartItems={setCartItems} user={user} setUser={setUser} notify={notify}/>
        ))}
      </CartItemsContainer>
    </Container>
  )
}

export default CartScreen