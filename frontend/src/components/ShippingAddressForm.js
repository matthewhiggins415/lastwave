import React, { useState } from 'react'
import { Form, Input } from '../styles/ProfileScreen.styles'
import { editUserShippingAddress } from '../api/auth'

const ShippingAddressForm = ({ userProfile, setShippingAddress, notify }) => {
//   const [address, setAddress] = useState('address')
//   const [unit, setUnit] = useState('unit')
//   const [city, setCity] = useState('city')
//   const [zip, setZip] = useState('zip')
//   const [state, setState] = useState('state')
//   const [country, setCountry] = useState('country')

  const [formData, setFormData] = useState({
    address: userProfile.shippingAddress.address, 
    unit: userProfile.shippingAddress.unit,
    city: userProfile.shippingAddress.city, 
    zip: userProfile.shippingAddress.zip,
    state: userProfile.shippingAddress.state,
    country: userProfile.shippingAddress.country
  })

  const { address, unit, city, zip, state, country } = formData
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    console.log(formData)
    console.log(userProfile)
    // make asynchronous api call
    changeAddress()
    // fire notify
    notify('shit works')
    //reset the parent component
    setShippingAddress(false)
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const changeAddress = async () => {
    try {
      let res = editUserShippingAddress(userProfile, formData)
      console.log(res)
      // update parent component state? 
    } catch (err) {
      notify('something went wrong', 'danger')
      console.log(err)
    }
  }
 
  return (
    <Form>
      <Input type="text" name="address" value={address} placeholder={userProfile.shippingAddress.address} onChange={onChange} />
      <Input type="text" name="unit" value={unit} placeholder={userProfile.shippingAddress.unit} onChange={onChange} />
      <Input type="text" name="city" value={city} placeholder={userProfile.shippingAddress.city} onChange={onChange} />
      <Input type="text" name="zip" value={zip} placeholder={userProfile.shippingAddress.zip} onChange={onChange} />
      <Input type="text" name="state" value={state} placeholder={userProfile.shippingAddress.state} onChange={onChange} />
      <Input type="text" name="country" value={country} placeholder={userProfile.shippingAddress.country} onChange={onChange} />
      <button onClick={handleSubmit}>Save</button>
    </Form>
  )
}

export default ShippingAddressForm