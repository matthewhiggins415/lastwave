import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: black;
  position: relative;
  bottom: 0px;
  color: white;
  padding: 20px;
`

export const LinkContainer = styled.div`
  width: 100px; 
  display: flex;
  flex-direction: column; 
`

export const FooterLink = styled(Link)`
  padding: 5px;
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`