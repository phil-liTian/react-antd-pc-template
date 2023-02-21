import { Layout } from 'antd'
import Sider from './Sider'
import Content from './Content'

const Main = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider />
      <Layout>
        {/* 内容区域 */}
        <Content />
      </Layout>
    </Layout>
  )
}

export default Main
