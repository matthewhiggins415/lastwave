import apiUrl from '../../apiConfig'
import axios from 'axios'

// get users
export const getCustomers = (user) => {
  if (user.isAdmin === true) {
    console.log('get customers')
    return axios.get(apiUrl + '/admin/users', { headers: { Authorization: `Bearer ${user.token}`} })
  } else {
    console.log(`User is not admin`)
  }
}

// make a user an admin 

// get products 

// get orders 
