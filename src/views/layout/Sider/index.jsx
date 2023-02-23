import { Layout } from 'antd'
import { connect } from 'react-redux'
import Logo from './Logo'
import Menu from './Menu'
const { Sider } = Layout

const LayoutSider = props => {
  const { sidebarCollapsed } = props
  return (
    <Sider collapsed={sidebarCollapsed}>
      <Logo />
      <Menu />
    </Sider>
  )
}

export default connect(state => state.app)(LayoutSider)
