import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('accessToken')
  }
})

api.interceptors.request.use(
  request => {
    return request
  },
  function (error) {}
)

api.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    error = error.response.data

    return Promise.reject(error)
  }
)

export default api
