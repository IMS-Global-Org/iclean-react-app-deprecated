import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import navbar from './navbar'
import settings from './settings'

const rootReducer = combineReducers({
  form: formReducer,
  user,
  navbar,
  settings,
})

export default rootReducer
