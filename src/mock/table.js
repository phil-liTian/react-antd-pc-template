import Mock from 'mockjs'

const list = []
let count = 200

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: i,
      title: '@ctitle(5, 10)',
      author: '@cname',
      readings: '@integer(300, 5000)',
      date: '@date(yyyy-MM-dd)',
      'status|1': ['published', 'draft'],
      'star|1-3': '★',
    })
  )
}

// 获取表格数据
export const getTableList = (config) => {
  const {
    page = 1,
    pageSize = 10,
    title,
    status,
    star,
  } = JSON.parse(config.body)
  // 开始的下标
  let start = (page - 1) * pageSize
  let end = page * pageSize

  const _mockList = list.filter((item) => {
    // 根据star筛选
    if (star && item.star.length !== star) return false
    // 根据状态筛选
    if (status && item.status !== status) return false
    // 根据标题进行筛选
    if (title && item.title.indexOf(title) === -1) return false
    return true
  })

  const pageList = _mockList.slice(start, end)

  return {
    code: 200,
    data: {
      list: pageList,
      total: _mockList.length,
    },
  }
}

// 删除表格数据
export const deleteItem = (config) => {
  const { id } = JSON.parse(config.body)
  const idx = list.findIndex((item) => item.id === id)
  list.splice(idx, 1)
  return {
    code: 200,
  }
}

// 更新表格中的数据
export const updateItem = (config) => {
  const data = JSON.parse(config.body)
  const idx = list.findIndex((item) => item.id === data.id)
  list.splice(idx, 1, data)
  return { code: 200 }
}
