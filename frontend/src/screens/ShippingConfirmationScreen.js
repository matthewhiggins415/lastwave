import React, { useState } from 'react'
import { Container, Form, Input, Button } from '../styles/ShippingConfirmationScreen.styles'
import { editUserShippingAddress } from '../api/auth'
import { Navigate } from 'react-router-dom'

const ShippingConfirmationScreen = ({ user, notify, setUser }) => {
  const [navigate, setNavigate] = useState(false)
  const [formData, setFormData] = useState({
    address: '', 
    unit: '',
    city: '', 
    zip: '',
    state: '',
    country: ''
  })

  const { address, unit, city, zip, state, country } = formData

  const handleSubmit = (e) => {
    e.preventDefault()
    changeAddress()
    notify('shipping address updated')
    setNavigate(true)
  }


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const changeAddress = async () => {
    try {
      let res = await editUserShippingAddress(user, formData)
      console.log(res)
      setUser(res.data.updatedRecord)
    } catch (err) {
      notify('something went wrong', 'danger')
    }
  }

  if (navigate) {
    return <Navigate to="/checkout"/>
  }
 
  return (
    <Container>
      <h1>Shipping Address</h1>
      <Form>
        <Input type="text" name="address" value={address} placeholder="address" onChange={onChange} required/>
        <Input type="text" name="unit" value={unit} placeholder="unit" onChange={onChange}/>
        <Input type="text" name="city" value={city} placeholder="city" onChange={onChange} required/>
        <Input type="text" name="zip" value={zip} placeholder="zip code" onChange={onChange} required/>
        <Input type="text" name="state" value={state} placeholder="state" onChange={onChange} required/>
        <Input type="text" name="country" value={country} placeholder="country" onChange={onChange} required/>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  )
}

export default ShippingConfirmationScreen