import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Menu } from 'antd'
import menuList from '@/config/menuConfig'
const { Item, SubMenu } = Menu

const GetMenuNode = menuList => {
  const location = useLocation()
  const path = location.pathname
  return menuList.reduce((pre, item) => {
    if (!item.children) {
      // 只有一级菜单
      pre.push(
        <Item key={item.path}>
          <Link to={item.path}>
            {item.icon || null}
            <span>{item.title}</span>
          </Link>
        </Item>
      )
    } else {
      pre.push(
        <SubMenu
          key={item.path}
          title={
            <span>
              {item.icon || null}
              {item.title}
            </span>
          }
        >
          {GetMenuNode(item.children)}
        </SubMenu>
      )
    }

    return pre
  }, [])
}

function SideMenu () {
  const menuTreeNode = GetMenuNode(menuList)

  return (
    <div className='sidebar-menu-container'>
      {menuTreeNode.map((item, index) => (
        <Menu mode='inline' theme='dark' key={item.key}>
          {item}
        </Menu>
      ))}
    </div>
  )
}

export default SideMenu
