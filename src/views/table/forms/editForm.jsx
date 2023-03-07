import React, { Component } from 'react'
import { Modal, Form, Input, Rate, Select, DatePicker } from 'antd'

class EditForm extends Component {
  handleFinish = (values) => {
    console.log('values', values)
  }

  render () {
    const { visible, onCancel, currentRowData } = this.props
    console.log('currentRowData', currentRowData)
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 }
      },
      wrapperCol: {
        sm: { span: 16 }
      }
    }

    return (
      <Modal title='编辑' open={visible} onCancel={onCancel}>
        <Form {...formItemLayout} onFinish={this.handleFinish}>
          <Form.Item label='序号：' name='id'>
            <Input placeholder='序号' />
          </Form.Item>
          <Form.Item label='标题：' name='title'>
            <Input placeholder='标题' />
          </Form.Item>
          <Form.Item label='作者：' name='author'>
            <Input placeholder='作者' />
          </Form.Item>
          <Form.Item label='阅读量：' name='readings'>
            <Input placeholder='阅读量' />
          </Form.Item>
          <Form.Item label='推荐指数：' name='star'>
            <Rate />
          </Form.Item>
          <Form.Item label='状态：' name='status'>
            <Select placeholder='请选择状态'>
              <Select.Option value='published'>published</Select.Option>
              <Select.Option value='draft'>draft</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='时间：' name='date'>
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default EditForm
