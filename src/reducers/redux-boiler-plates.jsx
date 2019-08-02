export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const updateObject = (oldArray, newObj = '') => {
  const index = oldArray.findIndex( (obj) => {
    return parseInt(obj.id, 10) === parseInt(newObj.id, 10) 
  })
  return [
    ...oldArray.slice(0, index),
    newObj,
    ...oldArray.slice(index + 1),
  ]
}

export const deleteObject = (oldArray, id) => {
  const index = oldArray.findIndex( obj => parseInt(obj.id, 10) === parseInt(id, 10) )
  return [ ...oldArray.slice(0, index), ...oldArray.slice(index + 1) ]
}

export const resolvedPath = (path, obj) => {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
    }, obj)
}
