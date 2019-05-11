export const setFlash = (message, msgType) => {
  return { type: 'SET_FLASH', message, msgType }
}

export const clearFlash = () => {
  return { type: 'CLEAR_FLASH' }
}

export const flashErrors = (res) => {
  return {
    type: 'SET_FLASH',
    message: res.message,
    stack: res.stack,
    msgType: 'error',
  }
}

export const flashSuccess = (res) => {
  return {
    type: 'SET_FLASH',
    message: res.messsage,
    msgType: 'success',
  }
}
