import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Img } from '../styles/AdminProduct.styles'

const AdminProduct = ({ item, index }) => {
  let navigate = useNavigate()
  return (
    <Container>
      <p>{index + 1 + "."}</p>
      <Img src={item.imageOne} />
      <p>{item.name}</p>
      <p>{"$" + item.price}</p>
      <Button onClick={() => console.log("edit")}>edit</Button>
      <Button onClick={() => console.log("delete")}>delete</Button>
    </Container>
  )
}

export default AdminProduct