import { crud } from '../../boiler-plates'


export const indexPsychographicExams = crud( (getStore) => {
  return {
    type: 'INDEX_PSYCHOGRAPHIC_EXAMS',
    url: `/api/users/${getStore().user.id}/exams`,
  }
})

export const showPsychographicExam = crud((examId, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'SHOW_PSYCHOGRAPHIC_EXAM',
    url: `/api/users/${userId}/exams/${examId}`,
  }
})

export const createPsychographicExam = crud((exam, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'CREATE_PSYCHOGRAPHIC_EXAM',
    url: `/api/users/${userId}/exams`,
    payload: exam,
    verb: 'post',
    successMsg: 'Exam Created Successfully!',
  }
})

export const updatePsychographicExam = crud((exam, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'UPDATE_PSYCHOGRAPHIC_EXAM',
    url: `/api/users/${userId}/exams/${exam.id}`,
    payload: exam,
    verb: 'patch',
  }
})

export const deletePsychographicExam = crud((examId, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'DELETE_PSYCHOGRAPHIC_EXAM',
    url: `/api/users/${userId}/exams/${examId}`,
  }
})

// FIXME Move to own action file (ie. )
export const indexUserExams = crud((getStore) => {
  const userId = getStore().user.id
  return {
    type: 'INDEX_USER_EXAMS',
    url: `/api/users/${userId}/exams/individual`,
  }
})

export const showUserExam = crud((examId, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'SHOW_USER_EXAM',
    url: `/api/users/${userId}/exams/${examId}/individual`,
  }
})

export const updateUserExam = ((exam, getStore) => {
  const userId = getStore().user.id
  return {
    type: 'UPDATE_USER_EXAM',
    url: `/api/users/${userId}/exams/individual`,
    verb: 'patch'
  }
})
