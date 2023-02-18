import { reqLogin } from '@/service'
import { setToken } from '@u/auth'
import { setUserToken } from './user'

export const login = (userName, password) => dipatch => {
  return new Promise((resolve, reject) => {
    reqLogin({ userName, password })
      .then(res => {
        console.log('res', res)
        if (res.status === 200) {
          // 成功了
          const token = res.token
          setToken(token)
          dipatch(setUserToken(token))
          resolve(res)
        } else {
          // 用户名或者密码错误了
          reject(res.message)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
