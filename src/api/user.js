import request from 'src/utils/request'

export function loginAPI(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}

export function getInfoAPI() {
  return request({
    url: '/api/auth/info',
    method: 'get'
  })
}

export function logoutAPI() {
  return request({
    url: '/api/auth/logout',
    method: 'post'
  })
}

export function registerAPI(data) {
  return request({
    url: '/api/auth/register',
    method: 'post',
    data
  })
}
