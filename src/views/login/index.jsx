import React, { useState } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { Form, Input, Button, Spin, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from '@s/actions/auth'
import './index.scss'

const Login = props => {
  // 使用useForm可以使用form上的方法
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  console.log('form', form)

  const handleFinish = value => {
    setLoading(true)
    login('admin')
      .then(res => {
        message.success('登录成功')
        console.log('res', res)
      })
      .catch(err => {
        setLoading(false)
        message.error('用户名或者密码错误')
      })
  }

  return (
    <DocumentTitle title='用户登录'>
      <div className='login-container'>
        <Form className='content' onFinish={handleFinish}>
          <div className='title'>
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading}>
            <Form.Item rules={[{ required: true, message: '请输入用户名' }]}>
              <Input
                prefix={<UserOutlined />}
                placeholder='请输入用户名'
                defaultValue='admin'
              />
            </Form.Item>
            <Form.Item>
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
              <span>账号：admin, 密码： 随意</span>
              <br />
              <span>账号：editor</span>
              <br />
              <span>账号：customer</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  )
}

const mapStateToProps = state => {
  return {
    num: state.num
  }
}

export default connect(mapStateToProps)(Login)
