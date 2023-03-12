import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Form, Input, Button, Spin, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login, getUserInfo } from '@s/actions'
import './index.scss'

const Login = (props) => {
  const { login, token, getUserInfo } = props
  // 使用useForm可以使用form上的方法
  const [loading, setLoading] = useState(false)

  const handleFinish = ({ userName }) => {
    setLoading(true)
    login(userName)
      .then((res) => {
        message.success('登录成功')
        getUserInfo(res.token)
      })
      .catch((err) => {
        setLoading(false)
        message.error('用户名或者密码错误')
      })
  }

  console.log('token', token)

  if (token) {
    return <Navigate to='/dashboard'></Navigate>
  }

  return (
    <DocumentTitle title='用户登录'>
      <div className='login-container'>
        <Form className='content' onFinish={handleFinish}>
          <div className='title'>
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading}>
            <Form.Item
              name='userName'
              initialValue='admin'
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input prefix={<UserOutlined />} placeholder='请输入用户名' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder='请输入密码'
                type='password'
              />
            </Form.Item>
            <Form.Item>
              <Button
                className='login-form-button'
                type='primary'
                htmlType='submit'
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号：admin 密码： 任意输入</span>
              <br />
              <span>账号：editor 密码： 任意输入</span>
              <br />
              <span>账号：customer 密码： 任意输入</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  )
}

export default connect((state) => state.user, { login, getUserInfo })(Login)
