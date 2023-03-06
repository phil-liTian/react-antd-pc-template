// 实现复制功能
import Clipboard from 'clipboard'
import { message } from 'antd'

const clipboardSuccess = () => {
  message.success('复制成功')
}

const clipboardError = () => {
  message.error('复制失败')
}

const handleClipboard = (event, text) => {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })

  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })

  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })

  clipboard.onClick(event)
}

export default handleClipboard
