import request from '@u/request'

// 获取用户信息
export function reqUserInfo (data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data
  })
}
