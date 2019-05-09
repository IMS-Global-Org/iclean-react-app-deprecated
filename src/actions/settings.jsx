
import axios from 'axios'
import { setFlash } from './flash'

export const updateContactInfoAddress = (address) => {
  return (dispatch, getState) => {
    axios.post(`/api/addresses`, { address })
      .then( res => {
        dispatch({
          type: 'UPDATE_CONTACT_INFO_ADDRESS',
          address: res.data
        })
      })
      .catch( res => {
        const errorMsgs = res.response.data.errors
        dispatch(setFlash(errorMsgs, 'error'))
      })
  }
}

export const showContactInfoAddress = () => {
  return (dispatch, getState) => {
    axios.get(`/api/addresses/for_user`)
      .then( res => {
        dispatch({
          type: 'SHOW_CONTACT_INFO_ADDRESS',
          address: res.data,
        })
      })
      .catch( res => {
        const errorMsgs = res.response.data.errors
        dispatch(setFlash(errorMsgs, 'error'))
      })
  }
}
