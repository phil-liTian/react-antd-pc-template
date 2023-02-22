import React, { useRef, useEffect } from 'react'
import { Card } from 'antd'
import Typing from '@u/typing'

const TypingCard = props => {
  const { source, title } = props
  const sourceEl = useRef()
  const outputEl = useRef()

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl,
      output: outputEl
    })
    typing.start()
  }, [])

  return (
    <Card bordered={false} title={title}>
      <div
        style={{ display: 'none' }}
        ref={sourceEl}
        dangerouslySetInnerHTML={{ __html: source }}
      ></div>
      <div ref={outputEl}></div>
    </Card>
  )
}

export default TypingCard
