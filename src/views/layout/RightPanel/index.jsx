import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Drawer, Row, Col, Button, Switch, Divider } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { changeSetting, toggleRightPanel } from '@s/actions'

const RightPanel = props => {
  const {
    sidebarLogo: defaultSidebarLogo,
    tagsView: defaultTagView,
    settingPanelVisible,
    changeSetting,
    toggleRightPanel
  } = props

  const [sidebarLogo, setSidebarLogo] = useState(defaultSidebarLogo)
  const [tagView, setTagView] = useState(defaultTagView)

  // 设置logo是否展示
  const sidebarLogoChange = checked => {
    setSidebarLogo(checked)
    changeSetting({ key: 'sidebarLogo', value: checked })
  }

  const tagViewChange = checked => {
    setTagView(checked)
    changeSetting({ key: 'tagsView', value: checked })
  }

  return (
    <div className='rightSettings'>
      <Drawer
        onClose={toggleRightPanel}
        title='系统设置'
        width={350}
        open={settingPanelVisible}
      >
        <Row>
          <Col span={12}>
            <span>侧边栏 Logo</span>
          </Col>
          <Col span={12}>
            <Switch
              checkedChildren='开'
              unCheckedChildren='关'
              defaultChecked={sidebarLogo}
              onChange={sidebarLogoChange}
            ></Switch>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col span={12}>
            <span>固定 Header</span>
          </Col>
          <Col span={12}>
            <Switch checkedChildren='开' unCheckedChildren='关'></Switch>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col span={12}>
            <span>开启 Tags-View</span>
          </Col>
          <Col span={12}>
            <Switch
              defaultChecked={tagView}
              checkedChildren='开'
              unCheckedChildren='关'
              onChange={tagViewChange}
            ></Switch>
          </Col>
        </Row>
        <Divider dashed />
        <Button style={{ width: '100%' }}>
          <CopyOutlined />
          拷贝设置
        </Button>
      </Drawer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.app,
    ...state.setting
  }
}

export default connect(mapStateToProps, { changeSetting, toggleRightPanel })(
  RightPanel
)
