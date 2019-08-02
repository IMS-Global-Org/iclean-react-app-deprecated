import { createReducer, updateObject, deleteObject } from '../../redux-boiler-plates'

// Default State for all Settings sub-sections
const defaults = {
  exams: [],
  questions: [],
}

const indexPsychographicExams = (state, action) => {
  return {
    ...state,
    exams: action.data,
  }
}

const showPsychographicExam = (state, action) => {
  return {
    ...state,
    exams: [ action.exam ],
  }
}

const updatePsychographicExam = (state, action) => {
  return {
    ...state,
    exams: updateObject(state.exams, action.data),
  }
}

const createPsychographicExam = (state, action) => {
  return {
    ...state,
    exams: [ action.exam, ...state.data ],
  }
}

const deletePsychographicExam = (state, action) => {
  return {
    ...state,
    exams: deleteObject(state.exams, action.data.id),
  }
}

// load the user available Exam sections
// FIXME move to reducers/user/exams.jsx
const indexUserExams = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      exams: action.data,
    },
  }
}

// Load Exam questions for a specific user/client
// FIXME move to reducers/questions.jsx
const indexExamQuestions = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      questions: action.questions,
    }
  }
}

// Load exam question answers into the database
// FIXME move to reducers/answers.jsx
const updateExamQuestionAnswers = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      answers: action.answers,
    }
  }
}

// Create the local Reducer for settings
const psychographics = createReducer(defaults, {
  INDEX_PSYCHOGRAPHIC_EXAMS: indexPsychographicExams,
  CREATE_PSYCHOGRAPHIC_EXAM: createPsychographicExam,
  UPDATE_PSYCHOGRAPHIC_EXAM: updatePsychographicExam,
  DELETE_PSYCHOGRAPHIC_EXAM: deletePsychographicExam,

  // FIXME move to their own reducers
  INDEX_USER_EXAMS: indexUserExams,
  INDEX_EXAM_QUESTIONS: indexExamQuestions,
  UPDATE_EXAM_QUESTION_ANSWERS: updateExamQuestionAnswers,
})

export default psychographics
