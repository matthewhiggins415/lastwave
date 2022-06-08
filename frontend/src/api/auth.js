
import axios from 'axios'
import apiUrl from '../apiConfig'

//All of this needs to be changed! 

//Register
export const signUp = (data) => {
  let { name, email, password, passwordConfirmation } = data
  console.log(apiUrl)
  return axios.post(apiUrl + '/sign-up', {
    credentials: {
      name, 
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  })
}
  
//Login
export const signIn = (data) => {
    let { email, password } = data
    return axios.post(apiUrl + '/sign-in', {
      credentials: {
        email,
        password
      }
  })
}
  
//Logout
  export const signOut = (user) => {
    return axios.delete(apiUrl + '/sign-out', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }
  
  export const changePassword = (oldPassword, newPassword, user) => {
    return axios.patch(
      apiUrl + '/change-password',
      {
        passwords: {
          old: oldPassword,
          new: newPassword
        }
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )
  }

// get a single landlord 
export const getUser = (user) => {
  return axios.get(apiUrl + `/user/${user._id}`,  
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// Edit a landlord 
export const editALandlord = (user, data, id) => {
  return axios.patch(apiUrl + `/user/${id}`, 
  {
    landlord: data
  }, 
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}