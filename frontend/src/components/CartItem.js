import React, { useState, useEffect } from 'react'
import { removeItemFromCart, updateQtyItemFromCart} from '../api/cart'
import { Container, CartImage, CartItemInfo, RemoveButton, QuantityContainer, QuantityBtn, QuantityH2 } from '../styles/CartItem.styles' 
import apiUrl from '../apiConfig'

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

  const increaseQty = async (id) => {
    console.log("plus one", id)
    let qty = parseInt(quantity) + 1

    let res = await updateQtyItemFromCart(user, id, qty)
    setQuantity(qty)
    setCartItems(res.data.updatedCart.items)
    setCartTotal(res.data.updatedCart.subTotal)
  }

  const decreaseQty = async (id) => {
    console.log("plus one", id)
    let qty = parseInt(quantity) - 1

    if (qty < 1) {
      qty = 1
    }
    
    let res = await updateQtyItemFromCart(user, id, qty)
    setQuantity(qty)
    setCartItems(res.data.updatedCart.items)
    setCartTotal(res.data.updatedCart.subTotal)
  }

  return (
    <Container>
      <CartImage src={apiUrl + "/" + cartItem.image}/>
      <CartItemInfo>
        <RemoveButton onClick={handleClick}>remove</RemoveButton>
        <h2>{cartItem.name}</h2>
        <p>{"$" + cartItem.price + " " + "(" + "x" + quantity + ")"}</p>
     <QuantityContainer>
       <QuantityBtn onClick={() => increaseQty(cartItem.product)}>+</QuantityBtn>
       <QuantityH2>{quantity}</QuantityH2>
       <QuantityBtn onClick={() => decreaseQty(cartItem.product)}>-</QuantityBtn>
     </QuantityContainer>
     </CartItemInfo>
    </Container>
  )
}

export default CartItem 