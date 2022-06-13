import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, ProfileDivContainer, ProfileHeader, H1, P, H4, Button} from '../styles/ProfileScreen.styles'
import { getUser } from '../api/auth'

const ProfileScreen = ({ user, notify}) => {
  const [userProfile, setUserProfile] = useState(null)

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

  return (
    <Container>
      <H1>Profile</H1>
      <ProfileDivContainer>
        <ProfileHeader>
          <H4>User Info</H4>
          <Button>edit</Button>
        </ProfileHeader>
        <P>ID: {userProfile ? userProfile._id : 'none'}</P>
        <P>Name: {userProfile ? userProfile.name : 'none'}</P>
        <P>Email: {userProfile ? userProfile.email : 'none'}</P>
      </ProfileDivContainer>
      <ProfileDivContainer>
        <H4>Shipping Address</H4>
        <P>Address: {userProfile ? userProfile.shippingAddress.address : 'absent'}</P>
        <P>Unit: {userProfile ? userProfile.shippingAddress.unit : 'absent'}</P>
        <P>City: {userProfile ? userProfile.shippingAddress.city : 'absent'}</P>
        <P>Zip Code: {userProfile ? userProfile.shippingAddress.zip : 'absent'}</P>
        <P>State: {userProfile ? userProfile.shippingAddress.state : 'absent'}</P>
       <P>Country: {userProfile ? userProfile.shippingAddress.country : 'absent'}</P> 
      </ProfileDivContainer> 
      <ProfileDivContainer>
        <H4>Payment Method</H4>
      </ProfileDivContainer>
      <ProfileDivContainer>
        <H4>Orders</H4>
      </ProfileDivContainer>
    </Container>
  )
}

export default ProfileScreen