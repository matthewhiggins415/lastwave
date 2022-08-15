import React, { useState, useEffect } from 'react'
import { removeItemFromCart, updateQtyItemFromCart } from '../api/cart'
import { Container, CartImage, CartItemInfo, RemoveButton, QuantityContainer, QuantityBtn, QuantityH2 } from '../styles/CartItem.styles' 

const CartItem = ({ cartItem, id, user, setUser, setCartItems, setCartTotal, notify }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity)

  const handleClick = () => {
    removeItem()
  }

  const removeItem = async () => {
    try {
      console.log("user", user)
      console.log("id", id)
      let res = await removeItemFromCart(user, id)
      console.log("res from remove:", res)
      // setUser(res.data.user)
      setCartItems(res.data.updatedCart.items)
      setCartTotal(res.data.updatedCart.subTotal)
      notify('item removed from cart')
    } catch(error) {
      console.log(error)
      notify('something went wrong', 'danger')
    }
  }

  return (
    <Container>
      <CartImage src={cartItem.image}/>
      <CartItemInfo>
        <h2>{cartItem.name}</h2>
        <p>{"$" + cartItem.price + " " + "(" + "x" + quantity + ")"}</p>
        <RemoveButton onClick={handleClick}>remove</RemoveButton>
     </CartItemInfo>
     <QuantityContainer>
       <QuantityBtn>+</QuantityBtn>
       <QuantityH2>{quantity}</QuantityH2>
       <QuantityBtn>-</QuantityBtn>
     </QuantityContainer>
    </Container>
  )
}

export default CartItem 