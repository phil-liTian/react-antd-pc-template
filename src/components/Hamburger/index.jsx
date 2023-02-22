import React from 'react'
import { connect } from 'react-redux'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { toggleSiderBar } from '@s/actions'
import './index.scss'

const Hamburger = props => {
  const { sidebarCollapsed, toggleSiderBar } = props

  return (
    <div className='hamburger-container' onClick={toggleSiderBar}>
      {sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  )
}

export default connect(state => state.app, { toggleSiderBar })(Hamburger)
