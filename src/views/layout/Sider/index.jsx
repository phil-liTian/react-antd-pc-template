import { Layout } from 'antd'
import { connect } from 'react-redux'
import Logo from './Logo'
import Menu from './Menu'
const { Sider } = Layout

const LayoutSider = props => {
  const { sidebarCollapsed, sidebarLogo } = props
  return (
    <Sider collapsed={sidebarCollapsed}>
      {sidebarLogo ? <Logo /> : null}
      <Menu />
    </Sider>
  )
}

const mapStateToProps = state => {
  return {
    ...state.app,
    ...state.setting
  }
}

export default connect(mapStateToProps)(LayoutSider)
