import React from 'react'
import { Layout, Dropdown, Avatar } from 'antd'
import Hamburger from '@c/Hamburger'
import FullScreen from '@c/FullScreen'
import { CaretDownOutlined } from '@ant-design/icons'
import './index.scss'
import { connect } from 'react-redux'
const { Header } = Layout

const LayoutHeader = props => {
  return (
    <Header>
      <Hamburger />
      <div className='right-menu'>
        <FullScreen />
        <div className='dropdown-wrap'>
          <Dropdown>
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
