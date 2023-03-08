import request from '@u/request'
// 获取表格中的数据
export const getTableList = (data) => {
  return request({
    url: '/table/list',
    method: 'get',
    data,
  })
}

// 删除表格中数据
export const deleteItem = (data) => {
  return request({
    url: '/table/remove',
    method: 'post',
    data,
  })
}

// 更新表格中数据
export const updateItem = (data) => {
  return request({
    url: '/table/update',
    method: 'post',
    data,
  })
}
