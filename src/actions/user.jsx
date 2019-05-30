import axios from 'axios'
// TODO create helper methods, {ie. dispatch(flashErrors(res)) }
import { flashError } from './flash'

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
      .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const updateUserAddress = (address, cb = f => f) => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.patch(`/api/users/${userId}/addresses/${address.id}`, { address })
      .then( (res) => {
        dispatch({
          type: 'UPDATE_USER_ADDRESS',
          address: res.data
        })
        cb()
      })
      .catch( (res) => dispatch(flashError(res.response.data)) )
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
      .catch( (res) => dispatch(flashError(res.response.data)) )
  }
}

export const createUserAddress = ( address, cb = f => f ) => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.post(`/api/users/${userId}/addresses`, { address })
      .then( res => {
        dispatch({
          type: 'CREATE_USER_ADDRESS',
          address: res.data,
        })
        cb()
      })
      .catch( (res) => dispatch(flashError(res.response.data)) )
  }
}

export const deleteUserAddress = (addressId) => {
  return (dispatch, getState) => {
    const userId = getState().user.id
    axios.delete(`/api/users/${userId}/addresses/${addressId}`)
      .then( res => {
        dispatch({
          type: 'DELETE_USER_ADDRESS',
          address: res.data,
        })
      })
      .catch( res => dispatch(flashError(res.response.data)) )
  }
}
