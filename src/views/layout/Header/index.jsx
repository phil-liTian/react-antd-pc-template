import React from 'react'
import { Layout, Dropdown, Avatar, Menu, Modal } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Hamburger from '@c/Hamburger'
import BreadCrumb from '@c/BreadCrumb'
import FullScreen from '@c/FullScreen'
import Settings from '@c/Settings'
import './index.scss'
import { logout, getUserInfo } from '@s/actions'
const { Header } = Layout

const LayoutHeader = (props) => {
  const { avatar, logout, token, getUserInfo } = props
  const navigate = useNavigate()

  // 获取用户信息
  token && getUserInfo(token)
  // 注销
  const onLayout = () => {
    Modal.confirm({
      title: '注销',
      content: '确认退出当前系统吗？',
      okText: '确认',
      cancelText: '取消',
      onOk () {
        logout(token).then(() => {
          navigate('/login')
        })
      }
    })
  }

  const items = [
    {
      key: 1,
      label: (
        <div>
          <Link style={{ color: '#000' }} to='/dashboard'>
            首页
          </Link>
        </div>
      )
    },
    {
      key: 2,
      label: (
        <div>
          <a
            style={{ color: '#000' }}
            target='_blank'
            href='https://github.com/phil-liTian/react-antd-pc-template'
          >
            项目地址
          </a>
        </div>
      )
    },
    { key: 3, label: <div onClick={onLayout}>注销</div> }
  ]

  return (
    <Header>
      <Hamburger />
      {/* 面包屑 */}
      <BreadCrumb />
      <div className='right-menu'>
        {/* 全屏 */}
        <FullScreen />
        {/* 设置 */}
        <Settings />
        <div className='dropdown-wrap'>
          <Dropdown menu={{ items }}>
            <div>
              <Avatar src={avatar} />
              <CaretDownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.user
  }
}

export default connect(mapStateToProps, { logout, getUserInfo })(LayoutHeader)
