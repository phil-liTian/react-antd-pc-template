// 以下用户名可以登录系统，代表不同角色，有不同操作权限
const TOKENS = {
  admin: 'admin-token',
  editor: 'editor-token',
  guest: 'guest-token'
}

const users = {
  'admin-token': {
    id: 'admin',
    role: 'admin',
    name: '难凉热血',
    avatar: 'https://s1.ax1x.com/2020/04/28/J5hUaT.jpg',
    description: '拥有系统内所有菜单和路由权限'
  },
  'editor-token': {
    id: 'editor',
    role: 'editor',
    name: '编辑员',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '可以看到除户管理页面之外的所有页面'
  },
  'guest-token': {
    id: 'guest',
    role: 'guest',
    name: '游客',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '仅能看到Dashboard、作者博客、权限测试和关于作者四个页面'
  }
}

const LoginApi = {
  // 登录
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
  },

  // 获取用户信息
  userInfo (config) {
    const token = config.body
    const userInfo = users[token]
    if (!userInfo) {
      return {
        status: 400,
        message: '没有找到对应的用户信息'
      }
    }
    return {
      status: 200,
      userInfo
    }
  }
}

export default LoginApi
