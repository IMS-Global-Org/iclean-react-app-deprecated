const defaultState = {
  id: '',
}
const user = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...action.user }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export default user
