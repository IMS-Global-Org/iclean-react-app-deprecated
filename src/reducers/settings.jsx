const defaultState = {
  contact_info: {
    address: ''
  },
}

export const settings = ( state = defaultState, action) => {
  switch(action.type) {
    case 'UPDATE_CONTACT_INFO_ADDRESS':
      return {
        ...state,
        contact_info: {
          address: action.address
        },
      }
    case 'SHOW_CONTACT_INFO_ADDRESS':
      return {
        ...state,
        contact_info: {
          ...state.contact_info,
          address: action.address,
        },
      }
    default:
      return state
  }
}

export default settings
