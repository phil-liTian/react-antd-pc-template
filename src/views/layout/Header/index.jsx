import React from 'react'
import { Layout, Dropdown, Avatar } from 'antd'
import Hamburger from '@c/Hamburger'
import BreadCrumb from '@c/BreadCrumb'
import FullScreen from '@c/FullScreen'
import Settings from '@c/Settings'
import { CaretDownOutlined } from '@ant-design/icons'
import './index.scss'
import { connect } from 'react-redux'
const { Header } = Layout

const LayoutHeader = props => {
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
          <Dropdown trigger='click'>
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

const mapStateToProps = state => {
  return {
    ...state.user
  }
}

export default connect(mapStateToProps)(LayoutHeader)
