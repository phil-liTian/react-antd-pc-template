import Mock from 'mockjs'
import LoginApi from './login'

// mock登录及用户相关的接口信息
Mock.mock(/\/login/, 'post', LoginApi.login)
