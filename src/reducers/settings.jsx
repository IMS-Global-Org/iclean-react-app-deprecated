import { createReducer } from './redux-boiler-plates'

// Default State for all Settings sub-sections
const defaults = {
  profile: {
    psychographics: [],
    questions: [],
  }
}

// load the user available Psychographic sections
const indexUserPsychographics = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      psychographics: action.psychographics,
    },
  }
}

// Load psychograhic questions for a specific user/client
const indexPsychographicQuestions = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      questions: action.questions,
    }
  }
}

// Load psychograhic answers into the database
const updatePsychographicAnswers = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      answers: action.answers,
    }
  }
}

// Create the local Reducer for settings
const settings = createReducer(defaults, {
  INDEX_USER_PSYCHOGRAPHICS: indexUserPsychographics,
  INDEX_PSYCHOGRAPHIC_QUESTIONS: indexPsychographicQuestions,
  UPDATE_PSYCHOGRAPHIC_ANSWERS: updatePsychographicAnswers,
})

export default settings
