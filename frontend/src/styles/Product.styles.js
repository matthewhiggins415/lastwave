import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  max-width: 350px;
  min-height: 400px;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`

export const ProductLink = styled(Link)`
  color: black;
  text-decoration: none;
`
export const Image = styled.img`
  width: 300px;
  margin: 0 auto;
  border-radius: 10px;
`

export const ProductAddContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`

export const AddToCart = styled.button`
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  padding: 12px;
  border-radius: 10px;
`