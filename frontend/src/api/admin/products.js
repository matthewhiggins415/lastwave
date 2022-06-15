import axios from 'axios'
import apiUrl from '../../apiConfig'

export const retrieveProducts = () => {
  return axios.get(apiUrl + '/products')
}