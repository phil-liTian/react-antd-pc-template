import React from 'react'
import { Route, HashRouter, Routes, Navigate } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import Login from '@v/login'
import Layout from '@v/layout'
import routeList from '@/config/routeMap.js'

function RenderElement (props) {
  const { token } = useSelector(state => state.user)
  if (!token) {
    return <Navigate to='/login'></Navigate>
  } else {
    return <Layout />
  }
}

class Router extends React.Component {
  render () {
    return (
      <HashRouter>
        <Routes>
          <Route exact path='/login' element={<Login />}></Route>
          <Route path='/' element={<RenderElement />}>
            {routeList.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                ></Route>
              )
            })}
          </Route>
        </Routes>
      </HashRouter>
    )
  }
}

export default connect(null)(Router)
