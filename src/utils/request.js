import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 请求之前在请求头上携带token
    const params = config.data
    for (const key in params) {
      if (
        params[key] === null ||
        params[key] === undefined ||
        params[key] === ''
      ) {
        Reflect.deleteProperty(params, key)
      }
    }
    return config
  },
  (err) => {
    console.log('err', err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    console.log('err', err)
  }
)

export default service
