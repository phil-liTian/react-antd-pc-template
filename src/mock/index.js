import Mock from 'mockjs'
import LoginApi from './login'
// 模拟接口请求

// mock登录及用户相关的接口信息
Mock.mock(/\/login/, 'post', LoginApi.login)
Mock.mock(/\/userInfo/, 'post', LoginApi.userInfo)
