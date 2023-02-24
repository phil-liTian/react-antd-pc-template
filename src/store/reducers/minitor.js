import * as types from '../action-types'

const initState = {
  bugList: []
}

export default function minitor (state = initState, action) {
  switch (action.type) {
    case types.BUG_ADD_BUG: {
      return {
        ...state,
        bugList: [...state.bugList, action.bug]
      }
    }
    default:
      return state
  }
}
