import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  padding-top: 50px;
  margin-top: 30px;
  display: flex;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BackBtn = styled(Link)`
  position: absolute;
  text-decoration: none;
  color: white;
  border: 1px solid black;
  padding: 15px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
  background-color: black;
  width: 100px;
  text-align: center;
`

export const Image = styled.img`
  border-radius: 10px;
  width: 300px;
  height: 315px;
  background-color: transparent;
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px auto;
  width: 80%;
  flex-wrap: wrap;
`

export const ImgContainer = styled.div`
  display: flex;
  width: 280px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: 50%;
  max-width: 400px;
`

export const DetailContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 10px;
`

export const CheckoutBtn = styled.button`
  background-color: gold;
  color: black;
  padding: 20px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`