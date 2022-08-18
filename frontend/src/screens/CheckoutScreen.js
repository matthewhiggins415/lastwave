import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AddressH4, Container, H1, H4, CheckoutContainer, OrderSummaryDiv, CheckoutBtn, CheckoutAddressContainer, CheckoutAddressDiv, CheckoutEditBtn, EditAddressWarning, WarningH4 } from '../styles/CheckoutScreen.styles'
import CheckoutItem from '../components/CheckoutItem'
import CustomCheckout from '../components/CustomCheckout'
import { getItemsInCart } from '../api/cart'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/CustomCheckout'
import apiUrl from '../apiConfig'

const CheckoutScreen = ({ user,  notify }) => {
  const [cartTotal, setCartTotal] = useState(0.0)
  const [cart, setCart] = useState([])
  const [clientSecret, setClientSecret] = useState("");
  const [addressValid, setAddressValid] = useState(false)

  let total = cartTotal + 7 + 15
  let navigate = useNavigate()

  useEffect(() => {
    console.log("user is:", user)
    const isAddressComplete = () => {
      let currentAddress = user.shippingAddress
      console.log(currentAddress)
      const { address, city, country, state, zip } = currentAddress
      console.log(address, city, country, state, zip)

      if (address !== 'address' && city !== "city" && country !== "country" && state !== "state" && zip !== "zip") {
        setAddressValid(true)
      }
    }

    const fetchCart = async () => {
      try {
        let res = await getItemsInCart(user)
        // setCartTotal(res.data.cart.subTotal)
        setCart(res.data.cart.items)
        setCartTotal(res.data.cart.subTotal)
      } catch(err) {
        console.log(err)
      }
    }

    isAddressComplete()
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
          <h4>{"Items(" + cart.length + ")"}</h4>
          <h4>{"$" + parseInt(cartTotal)}</h4>
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
      <CheckoutContainer>
        <H4>Order Items</H4>
        <div>
          {cart.map((item) => (
            <CheckoutItem checkoutItem={item} key={item.product}/>
          ))}
        </div>
      <CheckoutEditBtn onClick={() => navigateToCart()}>Edit Order Items</CheckoutEditBtn>
      </CheckoutContainer>
      <CheckoutContainer>
        <H4>Shipping Address</H4>
        {addressValid ? null : 
        <EditAddressWarning>
          <WarningH4>UPDATE SHIPPING ADDRESS TO PAY</WarningH4>
          <CheckoutEditBtn onClick={() => navigateToProfile()}>Edit Shipping Address</CheckoutEditBtn>
        </EditAddressWarning>}
       { addressValid ? <CheckoutAddressContainer>
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
        </CheckoutAddressContainer> : null}
        <CheckoutEditBtn onClick={() => navigateToProfile()}>Edit Shipping Address</CheckoutEditBtn>
      </CheckoutContainer>
      { addressValid ? <CustomCheckout user={user} notify={notify}/> : null }
    </Container>
  )
}

export default CheckoutScreen