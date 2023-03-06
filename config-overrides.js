const { override, addWebpackAlias, fixBabelImports } = require('customize-cra')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true // 自动打包相关的样式
  }),

  // 添加别名
  addWebpackAlias({
    '@': resolve('src'),
    '@v': resolve('src/views'),
    '@c': resolve('src/components'),
    '@u': resolve('src/utils'),
    '@s': resolve('src/store')
  })
)
