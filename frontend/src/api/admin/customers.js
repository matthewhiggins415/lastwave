import apiUrl from '../../apiConfig'
import axios from 'axios'

// get users
export const getCustomers = (user) => {
  if (user.isAdmin === true) {
    return axios.get(apiUrl + '/admin/users', { headers: { Authorization: `Bearer ${user.token}`} })
  } else {
    console.log(`User is not admin`)
  }
}

// get a single user 
export const getAUser = (user, id) => {
  if (user.isAdmin === true) {
    return axios.get(apiUrl + `/admin/users/${id}`, { headers: { Authorization: `Bearer ${user.token}`} })
  } else {
    console.log('User is not admin')
  }
}

// delete a user 
export const deleteAUser = (user, id) => {
  if (user.isAdmin) {
    return axios.delete(apiUrl + `/admin/users/${id}`, {
      headers: { 
        Authorization: `Bearer ${user.token}`
      }
    })
  } else {
    console.log("user is not an admin")
  }
}

// make a user an admin 
export const makeAdmin = (user, id) => {
  if (user.isAdmin) {
    let data 
    return axios.patch(apiUrl + `/admin/user/${id}`, data, {
      headers: { 
        Authorization: `Bearer ${user.token}`
      }
    })
  } else {
    console.log("user is not an admin")
  }
}

// get products 

// get orders 
