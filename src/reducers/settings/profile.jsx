import { combineReducers } from 'redux'
import psychographics from './profile/psychographics'

const profile = combineReducers({
  psychographics,
})

export default profile
