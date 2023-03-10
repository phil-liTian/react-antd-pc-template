import React, { Component, createRef } from 'react'
import { Modal, Form, Input, Rate, Select, DatePicker, message } from 'antd'
import dayjs from 'dayjs'
import { updateItem } from '@/service'

class EditForm extends Component {
  formRef = createRef()
  // 编辑完成
  handleConfirm = async () => {
    const { current } = this.formRef
    try {
      const res = await current.validateFields(['title'])
    } catch (err) {
      const errTips = err.errorFields[0].errors[0].slice(0, -1)
      message.error(errTips)
      return
    }
    let data = current.getFieldsValue()
    data.date = dayjs(data.date).format('YYYY-MM-DD')
    data.star = ''.padStart(data.star, '★')

    updateItem(data).then((res) => {
      message.success('修改成功')
      this.props.onOk()
    })
  }

  render () {
    const { visible, onCancel, currentRowData } = this.props
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 }
      },
      wrapperCol: {
        sm: { span: 16 }
      }
    }

    return (
      <Modal
        title='编辑'
        open={visible}
        onCancel={onCancel}
        onOk={this.handleConfirm}
      >
        <Form
          ref={this.formRef}
          {...formItemLayout}
          initialValues={currentRowData}
          onFinish={this.handleFinish}
        >
          <Form.Item label='序号：' name='id'>
            <Input placeholder='序号' disabled />
          </Form.Item>
          <Form.Item label='标题：' name='title' rules={[{ required: true }]}>
            <Input placeholder='标题' />
          </Form.Item>
          <Form.Item label='作者：' name='author'>
            <Input placeholder='作者' disabled />
          </Form.Item>
          <Form.Item label='阅读量：' name='readings'>
            <Input placeholder='阅读量' disabled />
          </Form.Item>
          <Form.Item label='推荐指数：' name='star'>
            <Rate count={3} />
          </Form.Item>
          <Form.Item label='状态：' name='status'>
            <Select placeholder='请选择状态'>
              <Select.Option value='published'>published</Select.Option>
              <Select.Option value='draft'>draft</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='时间：' name='date'>
            <DatePicker showTime format='YYYY/MM/DD' />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default EditForm
