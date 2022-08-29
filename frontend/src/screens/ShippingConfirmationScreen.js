import React, { useState } from 'react'
import { Container, Form, Input, Button } from '../styles/ShippingConfirmationScreen.styles'

const ShippingConfirmationScreen = ({ user, notify }) => {
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
    // make asynchronous api call
    // changeAddress()
    // fire notify
    // notify('shipping address updated')
    //reset the parent component
    // setShippingAddress(false)
    console.log('submit')
  }


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
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