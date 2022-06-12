import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  display: flex;
`

export const CartImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const RemoveButton = styled.button`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid black;
  margin-top: 5px;
  background-color: white;
  cursor: pointer;
`