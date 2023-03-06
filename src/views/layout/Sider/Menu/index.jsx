import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import menuList from '@/config/menuConfig'
import { connect } from 'react-redux'

function SideMenu (props) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState([pathname])

  const menuItemClick = e => {
    const { keyPath, key } = e
    navigate(key)
    setSelectedKeys(keyPath)
  }

  return (
    <div className='sidebar-menu-container'>
      <Menu
        items={menuList}
        theme='dark'
        mode='inline'
        onClick={menuItemClick}
        selectedKeys={selectedKeys}
      ></Menu>
    </div>
  )
}

export default connect(state => state.app)(SideMenu)
