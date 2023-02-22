import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes, Navigate, useLocation, Outlet } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd'

const { Content } = Layout
const LayoutContent = props => {
  const { pathname } = useLocation()
  console.log('location', pathname)
  const getPageTitle = () => {
    const title = 'phil-react'
    return title
  }

  return (
    <DocumentTitle title={getPageTitle()}>
      <Content>
        {/* <Navigate to='/dashboard'></Navigate> */}

        <Outlet />
      </Content>
    </DocumentTitle>
  )
}

export default connect()(LayoutContent)
