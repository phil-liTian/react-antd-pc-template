export const minitor = data => {
  console.log('data', data)
  return {
    status: 200,
    message: '上传错误日志成功',
    data
  }
}
