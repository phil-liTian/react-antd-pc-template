import { reqLogin, reqLayout } from '@/service'
import { setToken } from '@u/auth'
import { removeToken } from '@u/auth'
import { resetUserInfo, setUserToken } from './user'

// 处理登录
export const login = (userName, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLogin({ userName, password })
      .then((res) => {
        if (res.status === 200) {
          // 成功了
          const token = res.token
          setToken(token)
          dispatch(setUserToken(token))
          resolve(res)
        } else {
          // 用户名或者密码错误了
          reject(res.message)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 退出登录

export const logout = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqLayout(token)
      .then((res) => {
        if (res.code === 200) {
          removeToken()
          // 清空store中的登录用户信息
          dispatch(resetUserInfo())
          resolve(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
