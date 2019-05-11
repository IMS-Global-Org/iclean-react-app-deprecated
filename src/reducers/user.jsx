import { createReducer } from './redux-boiler-plates'

const defaults = {
  addresses: ''
}

const login = (state = defaults, action) => ({ ...action.user })
const logout = (state = defaults, action) => ({})

const indexUserAddress = (state = defaults, action) => ({ ...state, addresses: action.addresses })
const updateUserAddress = (state = defaults, action) => {
  const index = state.addresses.findIndex( (add) => {
    return parseInt(add.id, 10) === parseInt(action.address.id, 10)
  })
  return {
    ...state,
    addresses: [
      ...state.addresses.slice(0,index),
      action.address,
      ...state.addresses.slice(index + 1)
    ],
  }
}
const showUserAddress = (state = defaults, action) => ({ ...state, addresses: [ action.address ] })
const createUserAddress = (state = defaults, action) => ({ ...state, addresses: [...state.addresses, action.address] })

const user = createReducer([], {
  LOGIN: login,
  LOGOUT: logout,
  INDEX_USER_ADDRESSES: indexUserAddress,
  UPDATE_USER_ADDRESS: updateUserAddress,
  SHOW_USER_ADDRESS: showUserAddress,
  CREATE_USER_ADDRESS: createUserAddress,
})

export default user
