import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, ProfileDivContainer, ProfileHeader, H1, P, H4, Button, Form, Input} from '../styles/ProfileScreen.styles'
import ShippingAddressForm from '../components/ShippingAddressForm'

const ProfileScreen = ({ user, notify, setUser }) => {
  const [editInfo, setEditInfo] = useState(false)
  const [shippingAddress, setShippingAddress] = useState(false)

  if (!user) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  const info = () => {
    return (
      <>
      <P>Name: {user.name}</P>
      <P>Email: {user.email}</P>
      </>
    )
  }

  const userInfoForm = () => {
    return (
      <Form>
        <Input placeholder={user.name} type="text"/>
        <Input placeholder={user.email} type="text"/>
      </Form>
    )
  }

  const userShippingAddress = () => {
    return (
      <>
      <P>Address: {user.shippingAddress.address}</P>
      <P>Unit: {user.shippingAddress.unit}</P>
      <P>City: {user.shippingAddress.city}</P>
      <P>Zip Code: {user.shippingAddress.zip}</P>
      <P>State: {user.shippingAddress.state}</P>
      <P>Country: {user.shippingAddress.country}</P> 
      </>
    )
  }

  return (
    <Container>
      <H1>Profile</H1>
      <ProfileDivContainer>
        <ProfileHeader>
          <H4>User Info</H4>
          <Button onClick={() => setEditInfo(!editInfo)}>{editInfo ? 'save' : 'edit'}</Button>
        </ProfileHeader>
        { editInfo ? userInfoForm() : info()}
      </ProfileDivContainer>
      <ProfileDivContainer>
        <ProfileHeader>
          <H4>Shipping Address</H4>
          {/* <Button onClick={() => setShippingAddress(!shippingAddress)}>{shippingAddress ? 'save' : 'edit'}</Button> */}
          {shippingAddress ? null : <Button onClick={() => setShippingAddress(!shippingAddress)}>edit</Button>}
        </ProfileHeader>
        { shippingAddress ? <ShippingAddressForm user={user} setShippingAddress={setShippingAddress} setUser={setUser} notify={notify}/> : userShippingAddress() }
      </ProfileDivContainer> 
     
      <ProfileDivContainer>
        <H4>Orders</H4>
      </ProfileDivContainer>
    </Container>
  )
}

export default ProfileScreen