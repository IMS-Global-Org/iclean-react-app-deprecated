import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import navbar from './navbar'

const rootReducer = combineReducers({
  form: formReducer,
  user,
  navbar,
})

export default rootReducer
