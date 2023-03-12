import React from 'react'
import TagList from './components/tagList'
import './index.scss'

const TagView = () => {
  console.log('APP_TOGGLE_SETTINGPANEL')
  return (
    <div className='tagsView-container'>
      <TagList />
    </div>
  )
}

export default TagView
