import React from 'react'
import { Route, HashRouter, Routes } from 'react-router-dom'
import Login from '@v/login'

class Router extends React.Component {
  render() {
    return (<HashRouter>
      <Routes>
        <Route exact path="/login" element={Login()}></Route>
      </Routes>
    </HashRouter>)
  }
}

export default Router