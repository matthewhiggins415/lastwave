import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, SubtotalContainer, CheckoutButton, H1, CartItemsContainer } from '../styles/CartScreen.styles'
import CartItem from '../components/CartItem'
import { getItemsInCart } from '../api/cart'

const CartScreen = ({ user, notify }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0.0)
  const [toCheckout, setToCheckout] = useState(false)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let res = await getItemsInCart(user)
        setCartItems(res.data.cart)
        setCartTotal(res.data.totalCartCost)
      } catch (e) {
        console.log(e)
      }
    }

    fetchCart()
  }, [])

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
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem._id} cartItem={cartItem} setCartTotal={setCartTotal} setCartItems={setCartItems} user={user} notify={notify}/>
        ))}
      </CartItemsContainer>
    </Container>
  )
}

export default CartScreen