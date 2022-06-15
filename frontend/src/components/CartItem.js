import React from 'react'
import { removeItemFromCart } from '../api/cart'
import { Container, CartImage, CartItemInfo, RemoveButton } from '../styles/CartItem.styles' 

const CartItem = ({ cartItem, user, setUser, setCartItems, setCartTotal, notify }) => {
  const handleClick = () => {
    removeItem()
  }

  const removeItem = async () => {
    try {
      let res = await removeItemFromCart(user, cartItem._id)
      setUser(res.data.user)
      setCartItems(res.data.user.cart)
      setCartTotal(res.data.totalCartCost)
      notify('item removed from cart')
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  return (
    <Container>
      <CartImage src={cartItem.imageOne}/>
      <CartItemInfo>
        <h2>{cartItem.name}</h2>
        <p>{"$" + cartItem.price}</p>
        <RemoveButton onClick={handleClick}>remove</RemoveButton>
     </CartItemInfo>
    </Container>
  )
}

export default CartItem 