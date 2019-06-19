import axios from 'axios'
import { flashError, flashSuccess } from './flash'


export const indexPsychographics = () => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    axios.get(`/api/users/${userId}/psychographics`)
      .then( res => dispatch({
        type: 'INDEX_USER_PSYCHOGRAPHICS',
        psychographics: res.data,
      }) )
      .catch( res => dispatch(
        flashError(res.response.data)
      ) )
  }
}

export const indexPsychographicQuestions = (psychoId) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    axios.get(`/api/users/${userId}/psychographics/${psychoId}/questions`)
    .then( res => dispatch({
      type: 'INDEX_PSYCHOGRAPHIC_QUESTIONS',
      questions: res.data,
    }) )
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}

export const updatePsychographicAnswers = (psychoId, answers) => {
  return (dispatch, getStore) => {
    const userId = getStore().user.id
    const url = `/api/users/${userId}/psychographics/${psychoId}/answers/batch_yes_no`
    axios.patch(url, { answers })
    .then( res => {
      dispatch({
      type: 'UPDATE_PSYCHOGRAPHIC_ANSWERS',
      answers: res.data,
      })
      dispatch(flashSuccess('Your Answers were Updated!'))
    })
    .catch( res => dispatch(flashError(res.response.data)) )
  }
}
