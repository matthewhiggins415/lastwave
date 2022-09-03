import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  margin: 5px auto;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const OrderLink = styled(Link)`
  color: black;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  text-decoration: none;
  min-width: 50px;
  width: 15%;
  margin: right;
  text-align: center;
`