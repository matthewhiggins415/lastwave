import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
`

export const CartImage = styled.img`
  max-width: 100px;
  min-height: 100px;
  border-radius: 4px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10px;
`

export const RemoveButton = styled.button`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 5px;
  background-color: white;
  cursor: pointer;
`

export const QuantityContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`

export const QuantityBtn = styled.button`
  padding: 5px 10px;
  height: auto;
  cursor: pointer;
  border: none;
  outline: none; 
  font-size: 30px;
  border-radius: 5%;
`

export const QuantityH2 = styled.h2`
  padding: 10px;
  margin: 0px 5px;
`