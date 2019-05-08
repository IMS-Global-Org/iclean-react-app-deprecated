import axios from 'axios'
import { setFlash } from './flash'

export const updateUserAddress = (address) => {
  return (dispatch, state) => {
    axios.post(`/api/user/#{userId}/address`, address)
      .then( res => {
        const { data: address } = res
        dispatch({ type: 'UPDATE_USER_ADDRESS', address })
      })
      .catch( res => {
        const errorMsgs = res.response.data.errors
        dispatch(setFlash(errorMsgs, 'error'))
      })
  }
}
