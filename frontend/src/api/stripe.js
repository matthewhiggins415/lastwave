import axios from 'axios'
import apiUrl from '../apiConfig'

// add an item to the users cart 
export const createPaymentIntent = (user) => {
  let data = ''
  let url = apiUrl + '/create-payment-intent'
  console.log("url", url)
  return axios.post(url, data, { headers: { Authorization: `Bearer ${user.token}`} })
}