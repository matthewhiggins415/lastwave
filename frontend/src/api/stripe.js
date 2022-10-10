import axios from 'axios'
import apiUrl from '../apiConfig'

// add an item to the users cart 
export const createPaymentIntent = (user) => {
  return axios.get(apiUrl + '/createintent', {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
}