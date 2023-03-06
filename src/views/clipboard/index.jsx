import React from 'react'
import { Row, Col, Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import TypingCard from '@c/TypingCard'
import clip from '@u/clipboard'

const content = `这是一个剪贴板,可以快捷剪切里面的内容`

const text =
  'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。 '
const ClipBoard = () => {
  const onCopy = e => {
    clip(e, text)
  }
  return (
    <div className='app-container'>
      <TypingCard title='剪贴板' source={content}></TypingCard>
      <br />
      <Row>
        <Col span={12}>{text}</Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button
            type='primary'
            onClick={e => onCopy(e)}
            icon={<CopyOutlined />}
          >
            copy
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default ClipBoard
