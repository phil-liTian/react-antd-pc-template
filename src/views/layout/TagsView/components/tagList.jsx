import React, { Component, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Tag } from 'antd'
import { removeTag, removeOtherTags, clearTags } from '@s/actions'

const TagList = (props) => {
  const { tagList, removeTag, removeOtherTags, clearTags } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [currentTag, setCurrentTag] = useState(tagList[0])
  const [menuVisible, setMenuVisible] = useState(false)
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const tagListContainer = useRef()
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

  // 点击内容区域的时候 显示关闭其它和关闭所有选项
  const handleContextMenu = (tag, e) => {
    e.preventDefault()
    // 记录当前点击的tag
    setCurrentTag(tag)
    const menuMinWidth = 105
    const clientX = e.clientX
    const clientY = e.clientY
    const clientWidth = tagListContainer.current.clientWidth

    setLeft(clientX)
    setTop(clientY)
    setMenuVisible(true)
  }

  const onCloseMenuContext = () => {
    setMenuVisible(false)
  }

  // 关闭其它标签
  const handleCloseOtherTags = () => {
    if (currentTag) {
      removeOtherTags(currentTag)
      navigate(currentTag?.key)
    }
    onCloseMenuContext()
  }

  // 关闭所有标签
  const handleCloseAllTags = () => {
    if (currentTag) {
      clearTags(currentTag)
      navigate('/dashboard')
    }
    onCloseMenuContext()
  }

  // 点击切换
  const handleClick = (tag) => {
    navigate(tag.key)
  }

  return (
    <div>
      <ul className='tags-wrap' ref={tagListContainer}>
        {tagList.map((tag) => (
          <li key={tag.key}>
            <Tag
              onClose={() => handleClose(tag)}
              closable={tag.key !== '/dashboard'}
              color={pathname === tag.key ? 'blue' : 'gold'}
              onClick={() => handleClick(tag)}
              onContextMenu={(e) => handleContextMenu(tag, e)}
            >
              {tag.label}
            </Tag>
          </li>
        ))}
      </ul>

      {menuVisible ? (
        <ul
          className='contextmenu'
          style={{ left: `${left}px`, top: `${top}px` }}
        >
          <li onClick={handleCloseOtherTags}>关闭其它</li>
          <li onClick={handleCloseAllTags}>关闭所有</li>
        </ul>
      ) : null}
    </div>
  )
}

export default connect((state) => state.tagsView, {
  removeTag,
  removeOtherTags,
  clearTags
})(TagList)
