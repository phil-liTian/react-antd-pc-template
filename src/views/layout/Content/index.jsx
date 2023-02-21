import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import routeList from '@/config/routeMap.js'
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd'
const { Content } = Layout

const LayoutContent = props => {
  return (
    <DocumentTitle title='内容'>
      <Content>
        <Routes>
          {routeList.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              ></Route>
            )
          })}
        </Routes>
      </Content>
    </DocumentTitle>
  )
}

export default connect()(LayoutContent)
