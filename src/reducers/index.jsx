import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import navbar from './navbar'
import flash from './flash'

const rootReducer = combineReducers({
  form: formReducer,
  user,
  navbar,
  flash,
})

export default rootReducer
