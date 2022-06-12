import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, SubtotalContainer, CheckoutButton, H1 } from '../styles/CartScreen.styles'
import CartItem from '../components/CartItem'
import { getItemsInCart } from '../api/cart'

const CartScreen = ({ user, notify }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0.0)

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

  return (
    <Container>
      <H1>Shopping Cart</H1>
      <SubtotalContainer>
        <p>Subtotal: </p>
        <p>{cartTotal ? "$" + cartTotal : "$" + 0}</p>
      </SubtotalContainer>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
      <div>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem._id} cartItem={cartItem} setCartItems={setCartItems} user={user} notify={notify}/>
        ))}
      </div>
    </Container>
  )
}

export default CartScreen