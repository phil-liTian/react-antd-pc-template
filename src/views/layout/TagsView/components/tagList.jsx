import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Tag } from 'antd'
import { removeTag } from '@s/actions'

const TagList = (props) => {
  const { tagList, removeTag } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  console.log('tagList', tagList)
  // 点击关闭tab标签
  const handleClose = (tag) => {
    const { key } = tag
    // 关闭的tab是当前查看页，直接跳转到最后一个
    const lastTagPath = tagList[tagList.length - 1].key
    const tagLength = tagList.length
    if (key === pathname) {
      navigate(lastTagPath)
    }
    // 如果关闭的是最后一个，之后当前查看的也是最后一个 才做跳转
    if (tag.key === lastTagPath && pathname === lastTagPath) {
      if (tagLength > 2) {
        navigate(tagList[tagLength - 2].key)
      } else if (tagLength === 2) {
        navigate(tagList[0].key)
      }
    }

    removeTag(tag)
  }

  // 点击切换
  const handleClick = (tag) => {
    navigate(tag.key)
  }

  return (
    <div>
      <ul className='tags-wrap'>
        {tagList.map((tag) => (
          <li key={tag.key}>
            <Tag
              onClose={() => handleClose(tag)}
              closable={tag.key !== '/dashboard'}
              color={pathname === tag.key ? 'blue' : 'gold'}
              onClick={() => handleClick(tag)}
            >
              {tag.label}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default connect((state) => state.tagsView, { removeTag })(TagList)
