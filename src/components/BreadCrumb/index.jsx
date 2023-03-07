import React from 'react'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import menuList from '@/config/menuConfig'
import './index.scss'

const getPath = (pathname, menuList) => {
  let tempPath = []

  try {
    function getNodePath (node) {
      tempPath.push(node)
      if (node.key === pathname) {
        throw new Error('GOT IT')
      }

      if (node.children?.length) {
        for (let i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i])
        }
        // 当前节点的字节点遍历完 仍没有找到，则删除路径中的该节点
        tempPath.pop()
      } else {
        // 找到叶子节点时，没有找到，则删除该叶子节点
        tempPath.pop()
      }
    }
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i])
    }
  } catch (err) {
    return tempPath
  }
}

const BreadCrumb = () => {
  const { pathname } = useLocation()
  let path = getPath(pathname, menuList)
  const first = path && path[0]
  if (first && first.label.trim() !== '首页') {
    path = [{ label: '首页', key: '/dashboard' }].concat(path)
  }

  return (
    <div className='Breadcrumb-container'>
      <Breadcrumb>
        {path &&
          path.map((item) =>
            item.label === '首页' ? (
              <Breadcrumb.Item key={item.key}>
                <a href={`#${item.key}`}>{item.label}</a>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>
            )
          )}
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumb
