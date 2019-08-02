import { crud } from './boiler-plates'

export const indexQuestions = crud((examId, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'INDEX_QUESTIONS',
    url: `/api/users/${userId}/exams/${examId}/questions`,
  }
})

export const showQuestion = crud((examId, questionId, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'SHOW_QUESTION',
    url: `/api/users/${userId}/exams/${examId}/questions/${questionId}`,
  }
})

export const createQuestion = crud((examId, question, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'CREATE_QUESTION',
    url: `/api/users/${userId}/exams/${examId}/questions`,
    payload: question,
    verb: 'post',
  }
})

export const updateQuestion = crud( (examId, question, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'UPDATE_QUESTION',
    url: `/api/users/${userId}/exams/${examId}/questions`,
    payload: question,
    verb: 'post',
  }
})

export const deleteQuestion = crud( (examId, questionId, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'DELETE_QUESTION',
    url: `/api/users/${userId}/exams/${examId}/questions/${questionId}`,
    verb: 'delete',
  }
})
