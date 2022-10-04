import axios from 'axios'
import apiUrl from '../apiConfig'

// add an item to the users cart 
export const addItemToCart = (user, id) => {
  let data = ''
  return axios.post(apiUrl + `/cart/${id}`, data,
  { headers: { Authorization: `Bearer ${user.token}`} }
 )
}
 
// retrieve a users cart items 
export const getItemsInCart = (user) => {
  console.log("this is the url for cart stuff: ", apiUrl + '/cart')
  return axios.get(
    apiUrl + '/cart', 
    { headers: { Authorization: `Bearer ${user.token}`} }
  )
}

// remove an item from a users cart 
export const removeItemFromCart = (user, id) => {
  let data = ''
  return axios.patch(apiUrl + `/cart/${id}`, data, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update the qty of an item from users cart 
export const updateQtyItemFromCart = (user, id, qty) => {
  let data = ''
  return axios.patch(apiUrl + `/cart/${id}/qty/${qty}`, data, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const clearCart = (user) => {
  return axios.delete(apiUrl + '/cart', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createCart = (user) => {
  return axios.post(apiUrl + '/cart', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}