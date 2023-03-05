import Mock from 'mockjs'
let list = []
const count = 20

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: '@increment',
      title: '@ctitle(5, 10)',
      author: '@cname',
      readings: '@integer(300, 5000)',
      date: '@date(yyyy-MM-dd)'
    })
  )
}

export const excelList = () => {
  return {
    code: 200,
    data: { list }
  }
}
