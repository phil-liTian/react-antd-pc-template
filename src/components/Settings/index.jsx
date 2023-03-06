import React from 'react'
import { connect } from 'react-redux'
import { Tooltip } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { toggleRightPanel } from '@s/actions'
import './index.scss'

const Settings = props => {
  const { toggleRightPanel } = props
  return (
    <div className='settings-container' onClick={toggleRightPanel}>
      <Tooltip placement='bottom' title='系统设置'>
        <SettingOutlined />
      </Tooltip>
    </div>
  )
}

export default connect(null, { toggleRightPanel })(Settings)
