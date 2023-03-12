import request from '@u/request'

// 登录
export function reqLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function reqLayout (data) {
  return request({
    url: '/layout',
    method: 'post',
    data
  })
}
