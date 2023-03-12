import React from 'react'
import { Card } from 'antd'
import TypingCard from '@c/TypingCard'
import Markdown from '@c/Markdown'

const content = '侧边栏的菜单是可以拖拽的'
const Draggable = () => {
  return (
    <div>
      <TypingCard title='新手指引' source={content} />
    </div>
  )
}

export default Draggable
