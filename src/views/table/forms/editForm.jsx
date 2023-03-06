import React, { Component } from "react";
import { Modal, Form } from 'antd'


class EditForm extends Component {
  render() {
    return <Modal title='编辑' visible={true}>
      <Form></Form>
    </Modal>
  }
}

export default EditForm