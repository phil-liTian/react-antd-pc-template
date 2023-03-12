import Mock from 'mockjs'
import LoginApi from './login'
import { excelList } from './excel'
import { minitor } from './minitor'
import { getTableList, deleteItem, updateItem } from './table'
// 模拟接口请求

// mock登录及用户相关的接口信息
Mock.mock(/\/login/, 'post', LoginApi.login)
Mock.mock(/\/layout/, 'post', LoginApi.layout)
Mock.mock(/\/userInfo/, 'post', LoginApi.userInfo)
Mock.mock(/\/minitor/, 'post', minitor)

// 获取excel数据
Mock.mock(/\/excel\/list/, 'get', excelList)

// 获取table中的数据
Mock.mock(/\/table\/list/, 'get', getTableList)
Mock.mock(/\/table\/remove/, 'post', deleteItem)
Mock.mock(/\/table\/update/, 'post', updateItem)
