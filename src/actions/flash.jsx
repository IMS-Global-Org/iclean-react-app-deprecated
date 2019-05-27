export const setFlash = (message, msgType, stack = '') => {
  return { type: 'SET_FLASH', message, msgType, stack }
}

export const clearFlash = () => {
  return { type: 'CLEAR_FLASH' }
}

export const flashErrors = (res) => {
  return {
    type: 'SET_FLASH',
    message: res.errors,
    stack: res.stack,
    msgType: 'error',
  }
}

export const flashSuccess = (res) => {
  return {
    type: 'SET_FLASH',
    message: res.messsage,
    stack: res.stack,
    msgType: 'success',
  }
}
