const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = override(
  // 添加别名
  addWebpackAlias({
    '@v': resolve('src/views'),
    '@c': resolve('src/components'),
    '@u': resolve('src/utils')
  })
)
