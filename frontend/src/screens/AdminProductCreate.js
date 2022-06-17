import React, { useState } from 'react'
import { Container, Form, Input, Button, BackButton, AdminProductCreateScreenHeader } from '../styles/AdminProductCreate.styles'
import { useNavigate } from 'react-router-dom'

const AdminProductCreate = ({ notify, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    imageOne: '',
    imageTwo: '',
    description: '',
    category: '',
    price: '',
    countInStock: ''
  })

  const { name, imageOne, imageTwo, description, category, price, countInStock } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const navigate = useNavigate()
  console.log(user)

  const handleClick = () => {
    navigate("/admin/products")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    notify("Submitted")
  }

  return (
    <Container>
      <AdminProductCreateScreenHeader>
        <BackButton onClick={handleClick}>Back</BackButton>
        <h1>Create a Product</h1>
      </AdminProductCreateScreenHeader>
      <Form onSubmit={handleSubmit}>
        <Input value={name} name="name" type="text" placeholder="name" onChange={onChange} required/>
        <Input value={imageOne} name="imageOne" type="" placeholder="imageOne" onChange={onChange} required/>
        <Input value={imageTwo} name="imageTwo" type="" placeholder="imageTwo" onChange={onChange} required/>
        <Input value={description} name="description" type="text-area" placeholder="description" onChange={onChange} required/>   
        <Input value={category} name="category" type="" placeholder="category" onChange={onChange} required/>
        <Input value={price} name="price" type=""  placeholder="price" onChange={onChange} required/>
        <Input value={countInStock} name="countInStock" type=""  placeholder="count in stock" onChange={onChange} required/>
        <Button type="submit">Submit</Button>
      </Form>

    </Container>
  )
}

export default AdminProductCreate