import axios from 'axios'
import apiUrl from '../../apiConfig'

// Get all products 
export const retrieveProducts = () => {
  return axios.get(apiUrl + '/products')
}

//Get A single product 
export const retrieveProduct = (user, id) => {
  if (user.isAdmin === true) {
    return axios.get(apiUrl + `/product/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  } 
}

//create a product 
export const createAProduct = (user) => {
  let data

  return axios.post(apiUrl + `/admin/product`, data, { headers: { Authorization: `Bearer ${user.token}`} })
}


// edit a product
export const editAProduct = (user, id, data) => {
  if (user.isAdmin === true) {
    return axios.patch(apiUrl + `/admin/product/${id}`, {
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

// delete a product 
export const deleteAProduct = (user, id) => {
  if (user.isAdmin) {
    return axios.delete(apiUrl + `/admin/product/${id}`, {
      headers: { 
        Authorization: `Bearer ${user.token}`
      }
    })
  } else {
    console.log("user is not an admin")
  }
}