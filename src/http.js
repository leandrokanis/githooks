/**
 * src/api/http.js
 */ 
import axios from 'axios'
import qs from 'qs'

/**
 *
 * parse error response
 */
let instance = axios.create({
  baseURL: `https://api.github.com`,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  }
})

// request header
instance.interceptors.request.use((config) => {
  // Do something before request is sent

  // api tokenなどを利用してheaderに載せる場合
  // const apiToken = sessionStorage.getItem('token')
  // config.headers = { 'Custom-Header-IF-Exist': apiToken }
  return config
}, error => {
  return Promise.reject(error)
})

// response parse
instance.interceptors.response.use((response) => {
  return response.data
}, error => {
  console.warn('Error status', error.response.status)
  // return Promise.reject(error)
  if (error.response) {
    return error.response.data
  } else {
    return Promise.reject(error)
  }
})

export const http = instance

