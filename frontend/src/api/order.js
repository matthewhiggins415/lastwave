// the place for all things order route related. 
import axios from 'axios'
import apiUrl from '../apiConfig'

// create an order as a user 
export const createOrder = (user) => {
  let data = ''
  return axios.post(apiUrl + `/order`, data,
    { headers: { Authorization: `Bearer ${user.token}`} }
   )
}
   
// get all orders as a user 
export const getOrders = (user) => {
  return axios.get(apiUrl + `/orders`,
    { headers: { Authorization: `Bearer ${user.token}`} }
  )
}

// get a single order as user
export const getSingleOrder = (user, id) => {
  return axios.get(apiUrl + `/order/${id}`,
    { headers: { Authorization: `Bearer ${user.token}`} }
  )
}

// only admins can update orders 
