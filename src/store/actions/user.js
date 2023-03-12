import * as types from '../action-types'
import { reqUserInfo } from '@/service'

// 通过token 获取用户信息
export const getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    reqUserInfo(token)
      .then((res) => {
        dispatch(setUserInfo(res.userInfo))
        resolve(res)
      })
      .catch((err) => {
        console.log('err', err)
        reject(err)
      })
  })
}

// 设置user的token
export const setUserToken = (token) => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token
  }
}

// 设置用户信息
export const setUserInfo = (userInfo) => {
  return {
    type: types.USER_SET_USER_INFO,
    ...userInfo
  }
}

// 重置登录信息
export const resetUserInfo = () => {
  return {
    type: types.USER_RESET_USER
  }
}
