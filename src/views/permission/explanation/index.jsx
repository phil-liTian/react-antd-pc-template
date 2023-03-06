import React from 'react'
import TypingCard from '@c/TypingCard'

const content = `
  <p>本系统可分三种角色进行角色权限控制：</p>

  <ul>
    <li>admin: 具有最高权限，可访问所有页面</li>
    <li>editor: 除了用户管理其它所有页面都可访问</li>
    <li>guest: 该角色仅拥有Dashboard、作者博客、权限测试和关于作者四个页面的权限。 </li>
  </ul>

`
const explanation = () => {
  return (
    <div className='app-container'>
      <TypingCard title='权限说明' source={content}></TypingCard>
    </div>
  )
}

export default explanation
