import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px; 
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 10px auto;
  min-width: 100%;
  border-radius: 5px;
`

export const OrderItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

export const OrderItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 15px 10px 10px;
  border-radius: 8px;
  margin: 5px auto;
  height: auto;
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 4px;
`