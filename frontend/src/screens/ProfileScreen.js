import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, ProfileDivContainer, ProfileHeader, H1, P, H4, Button, Form, Input} from '../styles/ProfileScreen.styles'
import { getUser } from '../api/auth'
import ShippingAddressForm from '../components/ShippingAddressForm'

const ProfileScreen = ({ user, notify}) => {
  const [userProfile, setUserProfile] = useState({})
  const [editInfo, setEditInfo] = useState(false)
  const [shippingAddress, setShippingAddress] = useState(false)

  useEffect(() => {
    //get the user
    const getTheUser = async (user) => {
      try {
        let res = await getUser(user)
        setUserProfile(res.data.user)
        console.log("userProfile is: ", res.data.user)
      } catch(error) {
        console.log(error)
        notify('something went wrong', 'danger')
      }
    }

    getTheUser(user)
  }, [])

  if (!user) {
    notify('not logged in', 'danger')
    return <Navigate to="/login"/>
  }

  const info = () => {
    return (
      <>
      <P>ID: {userProfile ? userProfile._id : 'none'}</P>
      <P>Name: {userProfile ? userProfile.name : 'none'}</P>
      <P>Email: {userProfile ? userProfile.email : 'none'}</P>
      </>
    )
  }

  const userInfoForm = () => {
    return (
      <Form>
        <P>ID: {userProfile ? userProfile._id : 'none'}</P>
        <Input placeholder={userProfile.name} type="text"/>
        <Input placeholder={userProfile.email} type="text"/>
      </Form>
    )
  }

  const userShippingAddress = () => {
    return (
      <>
      <P>Address: {userProfile ? userProfile.shippingAddress.address : 'absent'}</P>
      <P>Unit: {userProfile ? userProfile.shippingAddress.unit : 'absent'}</P>
      <P>City: {userProfile ? userProfile.shippingAddress.city : 'absent'}</P>
      <P>Zip Code: {userProfile ? userProfile.shippingAddress.zip : 'absent'}</P>
      <P>State: {userProfile ? userProfile.shippingAddress.state : 'absent'}</P>
      <P>Country: {userProfile ? userProfile.shippingAddress.country : 'absent'}</P> 
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
        { shippingAddress ? <ShippingAddressForm userProfile={userProfile} setShippingAddress={setShippingAddress} notify={notify}/> : userShippingAddress() }
      </ProfileDivContainer> 
      <ProfileDivContainer>
        <ProfileHeader>
          <H4>Payment Method</H4>
          <Button>edit</Button>
        </ProfileHeader>
      </ProfileDivContainer>
      <ProfileDivContainer>
        <H4>Orders</H4>
      </ProfileDivContainer>
    </Container>
  )
}

export default ProfileScreen