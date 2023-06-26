import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: window.location.origin, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'application/json'
  }
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

		// TODO
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response
    } else {
      return Promise.reject(new Error(response.data.error || 'No response'))
    }
  },
  (error) => {
    return Promise.reject(new Error(error.response.data.error || 'No response'))
  }
)

export default service
