const defaultState = {
  activeItem: '',
}

const navbar = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_ACTIVEITEM':
      return { activeItem: action.activeItem }
    default:
      return state
  }
}

export default navbar
