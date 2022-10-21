import React from 'react'
import Confetti from 'react-confetti'
import { Container, H2 } from '../styles/PaymentComplete.styles'

const PaymentCompleteScreen = () => {
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