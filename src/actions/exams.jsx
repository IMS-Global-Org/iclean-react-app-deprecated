import { crud } from './boiler-plates'


export const indexExams = crud( (examableType, examableId, getStore) => {
  const params = `examable_type=${examableType}&examable_id=${examableId}`
  return {
    type: 'INDEX_EXAMS',
    url: `/api/users/${getStore().user.id}/exams?${params}`,
  }
})
