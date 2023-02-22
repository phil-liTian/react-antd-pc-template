import React, { useState, useEffect } from 'react'
import { Tooltip, message } from 'antd'
import screenfull from 'screenfull'
import './index.scss'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'

const handleToggle = () => {
  if (!screenfull.isEnabled) {
    message.warning('your browser can not working')
    return false
  }
  // 点击实现切换
  screenfull.toggle()
}

const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const change = () => {
    setIsFullScreen(screenfull.isFullscreen)
  }

  useEffect(() => {
    // 注册事件监听
    screenfull.isEnabled && screenfull.on('change', change)
    return () => {
      // 移除该事件
      screenfull.isEnabled && screenfull.off('change', change)
    }
  }, [])

  return (
    <div className='fullScreen-container'>
      <Tooltip placement='bottom'>
        <div onClick={handleToggle}>
          {isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </div>
      </Tooltip>
    </div>
  )
}

export default FullScreen
