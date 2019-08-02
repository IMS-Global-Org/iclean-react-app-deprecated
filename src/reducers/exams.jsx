import { createReducer } from '../../redux-boiler-plates'

// Default State for all Settings sub-sections
const defaults = {
  exams: [],
}

const indexExams = (state, action) => {
  return {
    ...state,
    exams: action.data,
  }
}

const exams = createReducer(defaults,{
  INDEX_EXAMS: indexExams,
})

export default exams
