import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import PsychographicQuizzes from './PsychographicQuizzes'
import PsychographicQuiz from './PsychographicQuiz'


const Psychographics = () => (
  <Switch>
    <Route exact path='/settings/profile/psychographics/:psycho_id/quiz' component={PsychographicQuiz} />
    <Route component={PsychographicQuizzes} />
  </Switch>
)

export default connect()(Psychographics)
