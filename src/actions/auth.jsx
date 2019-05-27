import axios from 'axios'
import { setFlash, flashSuccess } from '../actions/flash'

// registerUser
export const registerUser = (email, password, passConf, history) => {
  const params = {
    email,
    password,
    password_confirmation: passConf,
  }
  return (dispatch) => {
    axios.post('/api/auth', params)
      .then( res => {
        const { data: { data: user }, headers } = res
        dispatch({ type: 'LOGIN', user, headers })
        history.push('/')
      })
      .catch( res => {
        const message = res.response.data.errors.join(', ')
        dispatch(setFlash(message, 'error'))
      })
  }
}

// TODO handleLogout
export const handleLogout = (history) => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        dispatch({ type: 'LOGOUT' })
        dispatch(setFlash('Logged out successfully!', 'success'))
        history.push('/login')
      })
      .catch( res => {
        const message = res.response.data.errors.join(', ')
        dispatch(setFlash(message, 'error'))
      })
  }
}

// TODO handleLogin
export const handleLogin = (email, password, history) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', { email, password })
      .then( res => {
        const { data: { data: user }, headers } = res
        dispatch({ type: 'LOGIN', user, headers })
        history.push('/')
      })
      .catch( res => {
        let message = ''
        if( res.response.data.errors ){
          message = res.response.data.errors.join(', ')
        } else if( typeof(res) === 'string' ) {
          message = res
        } else {
          message = 'Check Rails Server Logs!'
        }
        dispatch(setFlash(message, 'error'))
      })
  }
}

// validateToken
export const validateToken = (cb = f => f) => {
  return (dispatch) => {
    dispatch({ type: 'VALIDATE_TOKEN' })
    let headers = axios.defaults.headers.common
    axios.get('/api/auth/validate_token', headers)
      .then( res => dispatch({ type: 'LOGIN', user: res.data.data }))
      .catch( () => cb() )
  }
}

// reset current password
export const resetPassword = (oldPassword, newPassword, newPasswordConfirmation, cb = f => f) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    axios
      .patch(`/api/users/${userId}/reset_password`, {
        user: {
          old_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: newPasswordConfirmation,
        },
      })
      .then( res => {
        dispatch({
          type: 'PASSWORD_RESET',
          user: res.data.data,
        })
        dispatch(flashSuccess('Password Reset Sucessfully!'))
        cb()
      })
      .catch( res => {
        dispatch(setFlash('Password Not Updated Correctly!', 'error'))
      })
  }
}
