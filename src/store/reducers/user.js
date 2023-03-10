/**
 * 用户相关的全局store
 */

import { getToken } from '@u/auth'
import * as types from '../action-types'
const initUserInfo = {
  token: getToken(),
  avatar: '',
  role: ''
}

export default function user (state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        ...action
      }
    case types.USER_RESET_USER: {
      return {}
    }
    default:
      return state
  }
}
