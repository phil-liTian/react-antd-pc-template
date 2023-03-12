import { Layout } from 'antd'
import { connect } from 'react-redux'
import Sider from './Sider'
import Header from './Header'
import Content from './Content'
import RightPanel from './RightPanel'
import TagView from './TagsView'

const Main = (props) => {
  const { tagsView } = props
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider />
      <Layout>
        <Header />
        {tagsView ? <TagView /> : null}
        {/* 内容区域 */}
        <Content />
        {/* 右侧控制面板 */}
        <RightPanel />
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.setting
  }
}

export default connect(mapStateToProps)(Main)
