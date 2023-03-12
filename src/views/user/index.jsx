import React, { Component } from 'react'
import TypingCard from '@c/TypingCard'

const content =
  '此处用于管理系统中的用户，可对已存在的用户进行更新或对增加新用户'

class User extends Component {
  render () {
    return (
      <div>
        <TypingCard title='用户管理' source={content} />
      </div>
    )
  }
}

export default User
