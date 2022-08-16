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
  margin-bottom: 10px;
`

export const OrderSummaryDiv = styled.div`
  width: 100%;
  padding: 2px;
  border-bottom: 1px solid darkgray;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const CheckoutBtn = styled.button`
  padding: 10px;
  background-color: gold;
  border: none;
  width: 90%;
  margin: 10px auto;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const CheckoutAddressContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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

export const EditAddressWarning = styled.div`
  width: 100%;
  margin: 10px auto; 
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: white;
  color: red;
`

export const WarningH4 = styled.h4`
  margin: 15px auto;
`