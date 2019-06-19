import { createReducer } from './redux-boiler-plates'

// Default State for all Settings sub-sections
const defaults = {
  profile: {
    exams: [],
    questions: [],
  }
}

const indexExams = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      questions: action.questions,
    },
  }
}

const showExam = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      exams: [ action.exam ],
    },
  }
}

const updateExam = (state, action) => {
  const index = state.profile.exams.findIndex( (exam) => parseInt(exam.id, 10) === parseInt(action.exam.id, 10) )
  return {
    ...state,
    profile: {
      ...state.profile,
      exams: [
        ...state.profile.exams.slice(0,index),
        action.exam,
        ...state.profile.exams.slice(index + 1),
      ],
    },
  }
}

const createExam = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      exams: [ action.exam, ...state.exams ],
    }
  }
}

const deleteExam = (state, action) => {
  const index = state.profile.exams.findIndex( exam => parseInt(exam.id, 10) === parseInt(action.exam.id, 10) )
  return {
    ...state,
    profile: {
      ...state.profile,
      exams: [
        ...state.profile.exams.slice(0, index),
        ...state.profile.exams.slice(index + 1),
      ],
    },
  }
}

// load the user available Exam sections
const indexUserExams = (state, action) => {
  return {
    ...state,
    profile: {
      ...state.profile,
      exams: action.exams,
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
const settings = createReducer(defaults, {
  INDEX_EXAMS: indexExams,
  SHOW_EXAM: showExam,
  CREATE_EXAM: createExam,
  UPDATE_EXAM: updateExam,
  DELETE_EXAM: deleteExam,

  // FIXME move to their own reducers
  INDEX_USER_EXAMS: indexUserExams,
  INDEX_EXAM_QUESTIONS: indexExamQuestions,
  UPDATE_EXAM_QUESTION_ANSWERS: updateExamQuestionAnswers,
})

export default settings
