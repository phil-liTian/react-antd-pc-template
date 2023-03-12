import React from 'react'
import { Card } from 'antd'
import TypingCard from '@c/TypingCard'
import Markdown from '@c/Markdown'

const content = '当前页面的markDown是基于react-editor实现的'
const MarkDownDemo = () => {
  return (
    <div>
      {/* <TypingCard title='markdown' source={content} />
      <br />
      <Card>
        <Markdown />
      </Card> */}
    </div>
  )
}

export default MarkDownDemo
