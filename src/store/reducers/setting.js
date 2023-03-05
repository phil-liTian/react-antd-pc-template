import defaultSetting from '@/defaultSetting.js'
import * as types from '../action-types'
const { showSettings, sidebarLogo, tagsView } = defaultSetting

const initState = {
  sidebarLogo,
  showSettings,
  tagsView
}

const setting = (state = initState, action) => {
  switch (action.type) {
    case types.SETTINGS_CHANGE_SETTINGS: {
      const { key, value } = action
      if (state.hasOwnProperty(key)) {
        return {
          ...state,
          [key]: value
        }
      }
      break
    }

    default: {
      return state
    }
  }
}

export default setting
