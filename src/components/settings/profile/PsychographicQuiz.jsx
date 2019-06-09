import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chunk } from 'lodash'
import {
  indexPsychographicQuestions,
  updatePsychographicAnswers,
} from '../../../actions/settings'
import { Grid, Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'

// Styled Components
const YesNoQuestion = styled.div`
  margin: 0.5rem auto;
  font-weight: 300;
  font-size: 14px;
`


class PsychographicQuiz extends Component {
  state = {}

  componentDidMount = () => {
    const { questions, dispatch, match } = this.props
    if( questions.length <= 0 ) {
      dispatch(indexPsychographicQuestions(match.params.psycho_id))
    }
  }

  // TODO add required field indicator
  renderRadioButtons = (question) => (
    <>
      <YesNoQuestion>
        {question.text}
      </YesNoQuestion>
      <div>
        <Form.Group inline>
          <label>Please Answer:</label>
          <Form.Radio
            label='Yes'
            name={question.id.toString()}
            value={1}
            checked={this.state[question.id] === 1}
            onChange={this.onRadioChange}
          />
          <Form.Radio
            label='No'
            name={question.id.toString()}
            value={0}
            checked={this.state[question.id.toString()] === 0}
            onChange={this.onRadioChange}
          />
        </Form.Group>
      </div>
    </>
  )

  renderButtonSection = () => (
    <Grid.Row columns={1}>
      <Grid.Column width={16}>
        <Button.Group floated='right' color='green'>
          <Button
            disabled={!(Object.keys(this.state).length > 0)}
            type='submit'
            onClick={this.onSubmit}>
            Save
          </Button>
        </Button.Group>
      </Grid.Column>
    </Grid.Row>
  )

  onRadioChange = (e,{name, value}) => this.setState({ [name]: value })

  onSubmit = (e) => {
    e.preventDefault()
    // TODO check for required answers
    // TODO Incluye un button para borrar la eleccion si no se lo require,
    // TODO add required column to the database
    const { dispatch, match } = this.props
    const psychoId = match.params.psycho_id
    const answers = Object.entries(this.state).map( ans => ({ id: parseInt(ans[0],10), answer: ans[1] }) )
    if( answers.length > 0 ) {
      dispatch(updatePsychographicAnswers(psychoId, answers))
    }
  }

  render = () => {
    const { questions } = this.props
    return (
      <Form>
        <Grid>
          { this.renderButtonSection() }
          { chunk(questions, 2).map((qPair, index) => (
          <Grid.Row columns={2} key={index}>
            <Grid.Column>
              { this.renderRadioButtons(qPair[0]) }
            </Grid.Column>
            <Grid.Column>
              { this.renderRadioButtons(qPair[1]) }
            </Grid.Column>
          </Grid.Row>
          )) }
          { this.renderButtonSection() }
        </Grid>
      </Form>
    )
  }
}

const mapStateToProps = (state, props) => ({
  questions: state.settings.profile.questions,
})

export default connect(mapStateToProps)(PsychographicQuiz)
