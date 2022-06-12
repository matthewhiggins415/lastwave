import React from 'react'
import { removeItemFromCart } from '../api/cart'
import { Container, CartImage, CartItemInfo, RemoveButton } from '../styles/CartItem.styles' 

const CartItem = ({ cartItem, user, setCartItems, notify }) => {
  const handleClick = () => {
    removeItem()
  }

  const removeItem = async () => {
    try {
      let res = await removeItemFromCart(user, cartItem._id)
      setCartItems(res.data.user.cart)
      console.log(res.data)
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