import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { ExamList } from './ExamList'
import { Questions } from './Questions'


const Exams = ( props ) => {
  return (
    <Switch>
      <Route
        exact
        path='/settings/profile/:examable_type/exams/:exam_id/questions'
        render={(p) => <Questions {...p} {...props} />} />
      <Route render={ p => <ExamList {...props} /> } />
    </Switch>
  )
}

Exams.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
  ]),
  statePath: PropTypes.string.isRequired,
}

const ConnectedExams = connect()(Exams)

export {
  ConnectedExams as Exams,
}
