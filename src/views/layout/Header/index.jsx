import React from 'react'
import { Layout, Dropdown, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'
import Hamburger from '@c/Hamburger'
import BreadCrumb from '@c/BreadCrumb'
import FullScreen from '@c/FullScreen'
import Settings from '@c/Settings'
import { CaretDownOutlined } from '@ant-design/icons'
import './index.scss'
import { connect } from 'react-redux'
const { Header } = Layout

const onClickMenu = () => {}

const menu = (
  <Menu onClick={onClickMenu}>
    <Menu.Item>
      <Link>首页</Link>
    </Menu.Item>
    <Menu.Item>项目地址</Menu.Item>
    <Menu.Item>注销</Menu.Item>
  </Menu>
)

const LayoutHeader = (props) => {
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
          <Dropdown trigger='click' menu={menu}>
            <div>
              <Avatar />
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
    ...state.user
  }
}

export default connect(mapStateToProps)(LayoutHeader)
