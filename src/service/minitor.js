// 将错误信息上传到服务端
import request from '@u/request'

export function tracker (data) {
  return request({
    url: '/minitor',
    method: 'post',
    data
  })
}
