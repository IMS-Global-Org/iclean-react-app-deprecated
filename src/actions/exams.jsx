import axios from 'axios'
import { flashError, flashSuccess } from './flash'


export const indexExams = () => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    axios.get(`/api/users/${userId}/exams`)
      .then( res => dispatch({
        type: 'INDEX_EXAMS',
        exams: res.data,
      }) )
      .catch( res => dispatch(
        flashError(res.response.data)
      ) )
  }
}

export const showExam = (examId) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    axios.get(`/api/users/${userId}/exams/${examId}`)
    .then( res => dispatch({
      type: 'SHOW_EXAM',
      exam: res.data,
    }) )
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const createExam = (exam) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/exams`
    axios.post(url, { exam })
    .then( res => {
      dispatch({
      type: 'CREATE_EXAM',
      exam: res.data,
      })
      dispatch(flashSuccess('Exam Created Successfully!'))
    })
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const updateExam = (exam) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/exams/${exam.id}`
    axios.patch(url, { exam })
    .then( res => dispatch({
      type: 'UPDATE_EXAM',
      exam: res.data,
    }) )
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const deleteExam = (examId) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/exams/${examId}`
    axios.delete(url)
    .then( res => dispatch({
      type: 'DELETE_EXAM',
      examId: res.data.id,
    }) )
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const userExams = () => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/exams?for=user`
    axios.get(url)
    .then( res => dispatch({
      type: 'USER_EXAMS',
      exams: res.data,
    }) )
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const showUserExam = (examId) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/exams/${examId}`
    axios.get(url)
    .then( res => dispatch({
      type: 'SHOW_USER_EXAM',
      exam: res.data,
    }) )
  }
}

export const updateUserExam = (exam) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/exams`
    axios.patch(url, { exam })
    .then( res => dispatch({
      type: 'UPDATE_USER_EXAM',
      exam: res.data,
    }) )
  }
}
