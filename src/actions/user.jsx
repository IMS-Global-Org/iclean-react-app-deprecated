
import axios from 'axios'
// TODO create helper methods, {ie. dispatch(flashErrors(res)) }
import { flashErrors } from './flash'

export const indexUserAddresses = () => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.get(`/api/users/${userId}/addresses`)
      .then( res => {
        dispatch({
          type: 'INDEX_USER_ADDRESSES',
          addresses: res.data,
        })
      })
      .catch( res => dispatch(flashErrors(res)) )
  }
}

export const updateUserAddress = (address) => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.patch(`/api/users/${userId}/addresses/${address.id}`, { address })
      .then( (res) => {
        dispatch({
          type: 'UPDATE_USER_ADDRESS',
          address: res.data
        })
      })
      .catch( (res) => dispatch(flashErrors(res)) )
  }
}

export const showUserAddress = () => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.get(`/api/users/${userId}/addresses`)
      .then( (res) => {
        dispatch({
          type: 'SHOW_USER_ADDRESS',
          address: res.data,
        })
      })
      .catch( (res) => dispatch(flashErrors(res)) )
  }
}

export const createUserAddress = ( address ) => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.post(`/api/users/${userId}/addresses`, { address })
      .then( res => {
        dispatch({
          type: 'CREATE_USER_ADDRESS',
          address: res.data,
        })
      })
      .catch( (res) => dispatch(flashErrors(res)) )
  }
}
