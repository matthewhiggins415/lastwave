import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H1 = styled.h1`
  text-align: center;
  margin: 10px auto;
`

export const SubtotalContainer = styled.div`
  display: flex;
  max-width: 150px;
  min-width: 125px;
  justify-content: space-between;
  margin: 0 auto;
`

export const CheckoutButton = styled.button`
  padding: 15px;
  background-color: gold;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: 15px auto;
  cursor: pointer;

  @media (min-width: 700px) {
    width: 40%;
    min-width: 500px;
    margin: 15px auto;
  }
`

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  @media (min-width: 700px) {
    width: 40%;
    min-width: 500px;
    margin: 15px auto;
  }
`

export const EmptyCart = styled.p`
  margin: 15px auto;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`