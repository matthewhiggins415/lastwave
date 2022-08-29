import apiUrl from '../../apiConfig'
import axios from 'axios'

// get an individual order
export const adminGetOrders = (user, id) => {
  if (user.isAdmin) {
    return axios.get(apiUrl + `/admin/orders/${id}`, {
      headers: { 
        Authorization: `Bearer ${user.token}`
      }
    })
  } else {
    console.log("user is not an admin")
  }    
}

// get all orders 
export const adminGetAllOrders = (user) => {
  if (user.isAdmin) {
    return axios.get(apiUrl + `/admin/orders`, {
      headers: { 
        Authorization: `Bearer ${user.token}`
      }
    })
  } else {
    console.log("user is not an admin")
  }   
}