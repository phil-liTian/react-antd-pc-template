import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './index.scss'

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  // 改变editor中的内容
  const setEditorStateChange = (editorState) => {
    // console.log(
    //   'editorState',
    //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
    // )
    setEditorState(editorState)
  }
  return (
    <div>
      <Card>
        <Editor
          editorState={editorState}
          editorClassName='editor-class'
          onEditorStateChange={setEditorStateChange}
        />
      </Card>
      <br />
      <Row gutter={10}>
        <Col span={12}>
          <Card title='同步转换成html' style={{ minHeight: 200 }}>
            {editorState &&
              draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          </Card>
        </Col>
        <Col span={12}>
          <Card title='同步转化成MarkDown' style={{ minHeight: 200 }}>
            {editorState &&
              draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RichTextEditor
