import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { useLocation, Outlet } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import menuList from '@/config/menuConfig'
import { Layout } from 'antd'
import { getMenuItemFromMenuListByProperty } from '@u/index'
import './index.scss'

const { Content } = Layout
const LayoutContent = props => {
  const { pathname } = useLocation()

  const getPageTitle = () => {
    let title = 'phil-react'
    const item = getMenuItemFromMenuListByProperty(menuList, 'key', pathname)
    if (item) {
      title += `-${item.label}`
    }
    return title
  }

  const contentStyle = {
    height: 'calc(100% - 100px)',
    padding: '24px'
  }

  return (
    <DocumentTitle title={getPageTitle()}>
      <Content style={contentStyle}>
        <TransitionGroup>
          {/* 这里指定key CSSTransition组件才会重新加载 */}
          <CSSTransition key={pathname} classNames='fade' timeout={500}>
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </DocumentTitle>
  )
}

export default connect()(LayoutContent)
