import { getToken } from '@u/auth'
import * as types from '../action-types'
const initUserInfo = {
  token: getToken()
}

export default function user (state = initUserInfo, action) {
  const newState = { ...state }
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

    default:
      return newState
  }
}
