// 以下用户名可以登录系统，代表不同角色，有不同操作权限
const TOKENS = {
  admin: 'admin-token',
  editor: 'editor-token',
  guest: 'guest-token'
}

const LoginApi = {
  login (config) {
    const { userName } = JSON.parse(config.body)
    // 暂时不限制密码password
    const token = TOKENS[userName]
    if (!token) {
      return {
        status: 400,
        message: '用户名或者密码错误'
      }
    }

    return {
      status: 200,
      message: '登录成功',
      token
    }
  }
}

export default LoginApi
