import request from '@u/request'
// 获取表格中的数据
export const getTableList = (data) => {
  return request({
    url: '/table/list',
    method: 'get',
    data
  })
}