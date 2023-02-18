import Cookies from 'js-cookie'
const TOKENKEY = 'phil-token'

// 设置token到cookie里面
export function setToken (token) {
  return Cookies.set(TOKENKEY, token)
}

// 获取token
export function getToken () {
  return Cookies.get(TOKENKEY)
}

// 移除TOken
export function removeToken () {
  return Cookies.remove(TOKENKEY)
}
