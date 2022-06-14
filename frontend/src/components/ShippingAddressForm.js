import React, { useState } from 'react'
import { Form, Input } from '../styles/ProfileScreen.styles'
import { editUserShippingAddress } from '../api/auth'

const ShippingAddressForm = ({ setShippingAddress, notify, setUser, user}) => {

  const [formData, setFormData] = useState({
    address: user.shippingAddress.address, 
    unit: user.shippingAddress.unit,
    city: user.shippingAddress.city, 
    zip: user.shippingAddress.zip,
    state: user.shippingAddress.state,
    country: user.shippingAddress.country
  })

  const { address, unit, city, zip, state, country } = formData
 
  const handleSubmit = (e) => {
    e.preventDefault()
    // make asynchronous api call
    changeAddress()
    // fire notify
    notify('shipping address updated')
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
      let res = await editUserShippingAddress(user, formData)
      console.log('res', res)
      setUser(res.data.updatedRecord)
      // update parent component state? 
    } catch (err) {
      notify('something went wrong', 'danger')
      console.log(err)
    }
  }
 
  return (
    <Form>
      <Input type="text" name="address" value={address} placeholder={user.shippingAddress.address} onChange={onChange} />
      <Input type="text" name="unit" value={unit} placeholder={user.shippingAddress.unit} onChange={onChange} />
      <Input type="text" name="city" value={city} placeholder={user.shippingAddress.city} onChange={onChange} />
      <Input type="text" name="zip" value={zip} placeholder={user.shippingAddress.zip} onChange={onChange} />
      <Input type="text" name="state" value={state} placeholder={user.shippingAddress.state} onChange={onChange} />
      <Input type="text" name="country" value={country} placeholder={user.shippingAddress.country} onChange={onChange} />
      <button onClick={handleSubmit}>Save</button>
    </Form>
  )
}

export default ShippingAddressForm