import React from 'react'
import TypingCard from '@c/TypingCard'
const AboutContent = `作者的github地址请👇<a href="https://github.com/phil-liTian" target='_blank'>phil</a>`

const Doc = () => {
  return <TypingCard title='github' source={AboutContent}></TypingCard>
}

export default Doc
