import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ContainerLink = styled(Link)`
  color: black;
  text-decoration: none;

`

export const Container = styled.div`
  border-radius: 10px;
  width: 220px;
  height: auto;
  padding: 0px;
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
  margin: 5px auto;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
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
  background-color: gold;
  color: black;
  cursor: pointer;
  border: none;
  padding: 12px;
  border-radius: 10px;
`

export const AddToCartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`