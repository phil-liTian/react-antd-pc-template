import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import menuList from '@/config/menuConfig'
import { addTag } from '@s/actions'
import { connect } from 'react-redux'
import { getMenuItemFromMenuListByProperty } from '@u/index'

function SideMenu (props) {
  const { addTag, role } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [showMenuList, setShowMenuList] = useState(menuList)
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
  }, [pathname])

  useEffect(() => {
    //根据权限处理menuList
    if (role && role !== 'admin') {
      const _menuList = menuList.filter((item) => {
        if (item.roles?.includes(role) || !item.roles) {
          if (!item.roles) {
            item.children = item.children.filter((child) => {
              return child.roles?.includes(role)
            })
          }
          return true
        }

        if (item?.children) {
          item.children.filter((child) => {
            return child.roles?.includes(role)
          })
        }
      })
      console.log('_menuList', _menuList)
      setShowMenuList(_menuList)
    }
  }, [role])

  return (
    <div className='sidebar-menu-container'>
      <Menu
        items={showMenuList}
        theme='dark'
        mode='inline'
        onClick={menuItemClick}
        selectedKeys={selectedKeys}
      ></Menu>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.user
  }
}

export default connect(mapStateToProps, { addTag })(SideMenu)
