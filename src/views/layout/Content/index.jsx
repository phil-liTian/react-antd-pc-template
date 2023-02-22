import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'
import routeList from '@/config/routeMap.js'
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd'

const { Content } = Layout
const LayoutContent = props => {
  return (
    <DocumentTitle title='内容'>
      <Content>
        {/* <Navigate to='/dashboard'></Navigate> */}
        这是content的内容
        <Routes>
          {/* {routeList.map(route => {
            return (
              <Route
                key={route.path}
                path='/dashboard'
                element={<div>123</div>}
              ></Route>
            )
          })} */}

          <Route path='/#/dashboard' element={<div>123</div>}></Route>
        </Routes>
      </Content>
    </DocumentTitle>
  )
}

export default connect()(LayoutContent)
