import axios from 'axios'
import { flashError, flashSuccess } from './flash'

// CRUD action Boilerplate
export const crud = (action, fetch = axios) => (...params) => {
  return (dispatch, getStore) => {
    const {
      type, 
      url, 
      payload = '', 
      verb = 'get', 
      successMsg = '' 
    } = action(...params, getStore)

    fetch[verb](url, payload && payload)
      .then( res => {
        dispatch({
          type,
          data: res.data,
        }) 
        if( successMsg ) { dispatch(flashSuccess(successMsg)) }
      })
      .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const resolvedPath = (path, obj) => {
  return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null
    }, obj)
}
