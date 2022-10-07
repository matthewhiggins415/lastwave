import React, { useState, useEffect } from 'react'
import { createPaymentIntent } from '../api/stripe'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Container, H4 } from '../styles/CustomCheckout.styles'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_LIVE_PUBLISHABLE_KEY}`);

const CustomCheckout = ({ user, notify }) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getPaymentIntent = async () => {
      let res = await createPaymentIntent(user)
      console.log("createpaymentintentRESPONSE:", res)
      setClientSecret(res.data.clientSecret)
    }

    getPaymentIntent()
  }, [])

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Container>
      <H4>Payment</H4>
      { clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
      )}
    </Container>
  )
}

export default CustomCheckout