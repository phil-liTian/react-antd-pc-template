import request from '@u/request'

export const getExcelList = () => {
  return request({
    url: '/excel/list',
    method: 'get'
  })
}
