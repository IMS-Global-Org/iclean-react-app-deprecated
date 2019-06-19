import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import ExamList from 'ExamList'
import Questions from './Questions'


const Exams = ( props ) => (
  <Switch>
    <Route
      exact
      path='/settings/profile/exams/:exam_id/questions'
      component={Questions} />
    <Route {...props} render={ p => <ExamList {...p} /> } />
  </Switch>
)

Exams.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
}

export default connect()(Exams)
