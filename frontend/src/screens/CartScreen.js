import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, SubtotalContainer, CheckoutButton, H1, CartItemsContainer, EmptyCart } from '../styles/CartScreen.styles'
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
        // let response = await getUser(user)
        // setUser(response.data.user)
        setCartItems(res.data.cart.items)
        setCartTotal(res.data.cart.subTotal)
        console.log("items in cart res:", res)
        // console.log("user response: ", response)
      } catch (e) {
        console.log(e)
      }
    }

    fetchCart()
  }, [setCartItems])

  if (!user) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  if (toCheckout) {
    if (user.shippingValid) {
      return <Navigate to="/checkout"/>
    } else {
      return <Navigate to="/shipping"/>
    }
  }

  return (
    <Container>
      <H1>Shopping Cart</H1>
      <SubtotalContainer>
        <p>Subtotal: </p>
        <p>{cartTotal ? "$" + cartTotal : "$" + 0}</p>
      </SubtotalContainer>
      {cartItems.length > 0 ? <CheckoutButton onClick={() => setToCheckout(!toCheckout)}>Proceed to Checkout</CheckoutButton> : ''}
      <CartItemsContainer>
        {cartItems.map((cartItem, index) => (
          <CartItem key={index + 1} cartItem={cartItem} id={cartItem.product} setCartTotal={setCartTotal} setCartItems={setCartItems} user={user} setUser={setUser} notify={notify}/>
        ))}
        {cartItems.length > 0 ? '' : <EmptyCart>Nothing in cart</EmptyCart>}
      </CartItemsContainer>
    </Container>
  )
}

export default CartScreen