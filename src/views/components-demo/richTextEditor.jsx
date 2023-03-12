import React from 'react'
import RichTextEditor from '@c/RichTextEditor'
import TypingCard from '@c/TypingCard'
const content = '这里是使用react-draft-wysiwyg结合draft-js实现富文本编辑器功能'
const RichTextEditorDemo = () => {
  return (
    <div>
      <TypingCard title='富文本' source={content} />
      <br />
      <RichTextEditor />
    </div>
  )
}

export default RichTextEditorDemo
