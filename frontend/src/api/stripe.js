import axios from 'axios'
import apiUrl from '../apiConfig'

// add an item to the users cart 
export const createPaymentIntent = (user) => {
  let data = ''
  return axios.post(`https://lastwave-ecommerce.herokuapp.com/create-payment-intent`, data,
   { headers: { Authorization: `Bearer ${user.token}`} })
}