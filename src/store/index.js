import { legacy_createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const store = legacy_createStore(reducers, applyMiddleware(reduxThunk))

export default store
