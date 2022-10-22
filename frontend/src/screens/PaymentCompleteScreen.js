import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import { Container, H2 } from '../styles/PaymentComplete.styles'
import { useStripe } from "@stripe/react-stripe-js";

// const stripe = require('stripe')('sk_test_51LuiD0L7RwICZVhrrc56VvkRpMflg3KLmYyOBpo3M2qWBGNfg2nY8MvfZYsneWqZQyAcEPLJy3fjyXhoS0KWnqRC00zXJvdK0s');

// const stripe = loadStripe('pk_live_51LuiD0L7RwICZVhr4vGRIphaYmL5gUjk25toecKqgO6KamesZ1EF7zIaXwAO5WT1zB21WrzVkmsM3rsVNOBj2ntM00LlmObyYk');
// const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_LIVE_PUBLISHABLE_KEY}`);


const PaymentCompleteScreen = () => {
  // const stripe = useStripe();

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let paymentIntent = params.get('payment_intent')
  let paymentIntentSecret = params.get('payment_intent_client_secret')

  console.log(paymentIntent, paymentIntentSecret)

  // useEffect(() => {
  //   const fetchIntent = async () => {
  //     const res = await stripe.paymentIntents.retrieve(`${paymentIntent}`)
  //     console.log("response", res)
  //   }

  //   fetchIntent()
  // }, [])

  return (
    <Container>
      <Confetti recycle={false} numberOfPieces={100}/>
      <div>
        <H2>Order Complete</H2>
        <p>Log back in to see your orders</p>
      </div>
    </Container>
  )
}

export default PaymentCompleteScreen