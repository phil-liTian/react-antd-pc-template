import React from 'react'
import TypingCard from '@c/TypingCard'

const content = '当前页面只有admin可以看到'
const explanation = () => {
  return (
    <div className='app-container'>
      <TypingCard title='admin可访问页面' source={content}></TypingCard>
    </div>
  )
}

export default explanation
