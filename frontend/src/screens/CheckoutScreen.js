import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AddressH4, Container, H1, H4, CheckoutContainer, OrderSummaryDiv, CheckoutBtn, CheckoutAddressContainer, CheckoutAddressDiv, CheckoutEditBtn } from '../styles/CheckoutScreen.styles'
import CheckoutItem from '../components/CheckoutItem'
import { getItemsInCart } from '../api/cart'

const CheckoutScreen = ({ user }) => {
  const [cartTotal, setCartTotal] = useState(0.0)

  let total = cartTotal + 7 + 15
  let navigate = useNavigate()

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let res = await getItemsInCart(user)
        setCartTotal(res.data.totalCartCost)
      } catch(err) {
        console.log(err)
      }
    }

    fetchCart()
  }, [])

  if (!user) {
    return <Navigate to="/login" />
  }

  const navigateToCart = () => {
    navigate("/cart")
  }

  const navigateToProfile = () => {
    navigate("/profile")
  }

  return (
    <Container>
      <H1>Checkout</H1>
      <CheckoutContainer>
        <H4>Order Summary</H4>
        <OrderSummaryDiv>
          <h4>{"Items(" + user.cart.length + ")"}</h4>
          <h4>{"$" + cartTotal}</h4>
        </OrderSummaryDiv>
        <OrderSummaryDiv>
          <h4>Shipping</h4>
          <h4>$15.00</h4>
        </OrderSummaryDiv>
        <OrderSummaryDiv>
          <h4>Tax</h4>
          <h4>$7.00</h4>
        </OrderSummaryDiv>
        <OrderSummaryDiv>
          <h4>Total</h4>
          <h4>{"$" + total}</h4>
        </OrderSummaryDiv>
      </CheckoutContainer>
      <CheckoutBtn onClick={"#"}>Submit Order</CheckoutBtn>
      <CheckoutContainer>
        <H4>Order Items</H4>
        <div>
          {user.cart.map((item) => (
            <CheckoutItem checkoutItem={item} key={item._id}/>
          ))}
        </div>
      <CheckoutEditBtn onClick={() => navigateToCart()}>Edit Order Items</CheckoutEditBtn>
      </CheckoutContainer>
      <CheckoutContainer>
        <H4>Shipping Address</H4>
        <CheckoutAddressContainer>
          <CheckoutAddressDiv>
            <AddressH4>{user.shippingAddress.address}</AddressH4>
            <AddressH4>{"#" + user.shippingAddress.unit}</AddressH4>
          </CheckoutAddressDiv>
          <CheckoutAddressDiv>
            <AddressH4>{user.shippingAddress.city + ","}</AddressH4>
            <AddressH4>{user.shippingAddress.state}</AddressH4>
            <AddressH4>{user.shippingAddress.zip}</AddressH4>
          </CheckoutAddressDiv>
          <AddressH4>{user.shippingAddress.country}</AddressH4>
        </CheckoutAddressContainer>
      <CheckoutEditBtn onClick={() => navigateToProfile()}>Edit Shipping Address</CheckoutEditBtn>
      </CheckoutContainer>
      <CheckoutContainer>
        <H4>Payment Method</H4>
      <CheckoutEditBtn onClick={() => navigateToProfile()}>Edit Payment Method</CheckoutEditBtn>
      </CheckoutContainer>

    </Container>
  )
}

export default CheckoutScreen