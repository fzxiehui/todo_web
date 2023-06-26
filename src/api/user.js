import request from 'src/utils/request'

export function loginAPI(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}
