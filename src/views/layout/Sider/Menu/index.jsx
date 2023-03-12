import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import menuList from '@/config/menuConfig'
import { addTag } from '@s/actions'
import { connect } from 'react-redux'
import { getMenuItemFromMenuListByProperty } from '@u/index'

function SideMenu (props) {
  const { addTag } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [selectedKeys, setSelectedKeys] = useState([pathname])

  const menuItemClick = (e) => {
    const { keyPath, key } = e
    const label = getMenuItemFromMenuListByProperty(menuList, 'key', key).label
    addTag({ ...e, label })
    navigate(key)
    setSelectedKeys(keyPath)
  }

  useEffect(() => {
    const matchedItem = menuList.find((item) => item.key === '/dashboard')
    addTag({ ...matchedItem, label: '首页' })
    setSelectedKeys([pathname])
  })

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

export default connect((state) => state.app, { addTag })(SideMenu)
