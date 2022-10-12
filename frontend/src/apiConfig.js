let apiUrl

const apiUrls = {
  production: 'https://lastwave-ecommerce.herokuapp.com',
  development: 'http://localhost:3000'
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
