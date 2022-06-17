import axios from 'axios'
import apiUrl from '../../apiConfig'

export const retrieveProducts = () => {
  return axios.get(apiUrl + '/products')
}

//create a product 
export const createAProduct = (user, data) => {
  if (user.isAdmin === true) {
    return axios.post(apiUrl + '/admin/product', {
      product: data
    }, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  } else {
    console.log('user is not an admin')
  }
}