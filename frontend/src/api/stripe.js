import axios from 'axios'
import apiUrl from '../apiConfig'

// add an item to the users cart 
export const createPaymentIntent = (user) => {
    let data = ''
    return axios.post(apiUrl + `/create-payment-intent`, data,
    { headers: { Authorization: `Bearer ${user.token}`} }
   )
}