import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes, Navigate, useLocation, Outlet } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import menuList from '@/config/menuConfig'
import { Layout } from 'antd'
import { getMenuItemFromMenuListByProperty } from '@u/index'

const { Content } = Layout
const LayoutContent = props => {
  const { pathname } = useLocation()
  const getPageTitle = () => {
    let title = 'phil-react'
    const item = getMenuItemFromMenuListByProperty(menuList, 'path', pathname)
    if (item) {
      title += `-${item.title}`
    }
    return title
  }

  return (
    <DocumentTitle title={getPageTitle()}>
      <Content>
        <Outlet />
      </Content>
    </DocumentTitle>
  )
}

export default connect()(LayoutContent)
