import React from 'react'
import { Route, HashRouter, Routes, Navigate } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import Login from '@v/login'
import Layout from '@v/layout'
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
          <Route path='/' element={<RenderElement />}></Route>
        </Routes>
      </HashRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    num: state.num
  }
}

export default connect(mapStateToProps)(Router)
