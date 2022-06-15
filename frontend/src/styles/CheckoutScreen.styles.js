import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    width: 40%;
    min-width: 500px;
    margin: 15px auto;
  }
`

export const H1 = styled.h1`
  text-align: center;
  margin: 15px 0;
`

export const CheckoutContainer = styled.div`
  width: 90%;
  margin: 5px auto;
  background-color: #F5F5F5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const H4 = styled.h4`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`

export const OrderSummaryDiv = styled.div`
  width: 90%;
  padding: 2px;
  border-bottom: 1px solid darkgray;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`

export const CheckoutBtn = styled.button`
  padding: 10px;
  background-color: gold;
  border: none;
  width: 90%;
  margin: 10px auto;
  cursor: pointer;
`

export const CheckoutAddressContainer = styled.div`
  width: 90%;
  margin-top: 5px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const CheckoutAddressDiv = styled.div`
  display: flex;
`

export const AddressH4 = styled.h4`
 padding: 2px;
 margin: 2px 0;
`

export const CheckoutEditBtn = styled.button`
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
`