import * as types from '../action-types'
const initState = {
  tagList: []
}

export default function tagsView (state = initState, action) {
  switch (action.type) {
    case types.TAGSVIEW_ADD_TAG: {
      // 增加标签
      const tag = action.tag
      // 已经存在匹配到的数据
      const matchedItem = state.tagList.find((item) => item.key === tag.key)
      if (matchedItem) {
        return state
      } else {
        return {
          ...state,
          tagList: [...state.tagList, tag]
        }
      }
    }

    case types.TAGSVIEW_DELETE_TAG: {
      return {
        ...state,
        tagList: [
          ...state.tagList.filter((item) => item.key !== action.tag.key)
        ]
      }
    }

    case types.TAGSVIEW_CLOSE_OTHER_TAGS: {
      console.log('action', action)
      return {
        ...state,
        tagList: state.tagList.filter(
          (item) => item.key === action.tag.key || item.key === '/dashboard'
        )
      }
    }

    case types.TAGSVIEW_EMPTY_TAGLIST: {
      return {
        ...state,
        tagList: state.tagList.filter((item) => item.key === '/dashboard')
      }
    }

    default:
      return state
  }
}
