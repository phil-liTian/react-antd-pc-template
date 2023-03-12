import * as types from '../action-types'

// 增加标签
export const addTag = (tag) => {
  return {
    type: types.TAGSVIEW_ADD_TAG,
    tag
  }
}

// 移除标签
export const removeTag = (tag) => {
  return {
    type: types.TAGSVIEW_DELETE_TAG,
    tag
  }
}

// 移除其它标签
export const removeOtherTags = (tag) => {
  return {
    type: types.TAGSVIEW_CLOSE_OTHER_TAGS,
    tag
  }
}

// 移除所有标签
export const clearTags = (tag) => {
  return {
    type: types.TAGSVIEW_EMPTY_TAGLIST,
    tag
  }
}
