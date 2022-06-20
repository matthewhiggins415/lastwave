import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Img } from '../styles/AdminProduct.styles'
import { deleteAProduct } from '../api/admin/products'

const AdminProduct = ({ notify, item, index, id, user, deleteProduct}) => {
  let navigate = useNavigate()

  const navigateToEdit = () => {
    navigate(`/admin/edit-product/${id}`)
  }

 
  return (
    <Container>
      <p>{index + 1 + "."}</p>
      <Img src={item.imageOne} />
      <p>{item.name}</p>
      <p>{"$" + item.price}</p>
      <Button onClick={navigateToEdit}>edit</Button>
      <Button onClick={() => deleteProduct(item._id)}>delete</Button>
    </Container>
  )
}

export default AdminProduct