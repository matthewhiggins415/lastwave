import axios from 'axios'
import apiUrl from '../apiConfig'

// add an item to the users cart 
export const addItemToCart = (user, id) => {
  return axios.post(apiUrl + `/cart/add/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
 
// retrieve a users cart items 
export const getItemsInCart = (user) => {
  return axios.get(apiUrl + '/cart', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// remove an item from a users cart 
export const removeItemFromCart = (user, id) => {
  return axios.delete(apiUrl + `/cart/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}