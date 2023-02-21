import { Layout } from 'antd'
import Logo from './Logo'
import Menu from './Menu'
const { Sider } = Layout

const LayoutSider = () => {
  return (
    <Sider>
      <Logo />
      <Menu />
    </Sider>
  )
}

export default LayoutSider
