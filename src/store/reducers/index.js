import { combineReducers } from 'redux'
import user from './user'
import app from './app'
import minitor from './minitor'
import setting from './setting'
import tagsView from './tagView'
// reducer从此文件夹中抛出

export default combineReducers({
  user,
  app,
  minitor,
  setting,
  tagsView
})
