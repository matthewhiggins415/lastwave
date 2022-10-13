import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  min-height: 90vh;
  flex-direction: column;
`

export const BackBtn = styled(Link)`
  text-decoration: none;
  color: white;
  border: 1px solid black;
  padding: 15px;
  border-radius: 5px;
  background-color: black;
  width: 100px;
  text-align: center;
`

export const Image = styled.img`
  border-radius: 10px;
  width: 250px;
  height: 275px;
  background-color: gray;
  max-width: 350px;
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px auto;
  max-width: 80%;
  flex-wrap: wrap;
`

export const ImgContainer = styled.div`
  display: flex;
  width: 300px;
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