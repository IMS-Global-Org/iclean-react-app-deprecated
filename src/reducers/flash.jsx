import { createReducer  } from './redux-boiler-plates'

const defaults = {
  message: '',
  stack: '',
  msgType: '',
}

const setFlash = (state, action) => ({
  ...state,
  message: action.message,
  msgType: action.msgType,
  stack: action.stack
})

const clearFlash = (state, action) => ({...state, ...defaults})

const flash = createReducer(defaults, {
  SET_FLASH: setFlash,
  CLEAR_FLASH: clearFlash,
})

export default flash
