/**
 * 全局配置的store
 */
import * as types from '../action-types'

const initAppState = {
  sidebarCollapsed: false, // 当前菜单是否是折叠状态
  settingPanelVisible: false // 设置面板是否可见
}

const app = (state = initAppState, action) => {
  const newState = { ...state }

  switch (action.type) {
    case types.APP_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      }
    default: {
      return newState
    }
  }
}

export default app
