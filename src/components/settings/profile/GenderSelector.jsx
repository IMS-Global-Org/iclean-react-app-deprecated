import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Checkbox } from 'semantic-ui-react'
import axios from 'axios'
import { flashError } from '../../../actions/flash'
import { capitalize } from 'lodash'

class GenderSelector extends Component {
  defaults = { selectedGender: '', genders: [] }
  state = { ...this.defaults }

  componentDidMount = () => {
    const { dispatch } = this.props
    const { genders } = this.state
    if( genders.length <= 0 ) {
      axios.get('/api/demographics/genders')
        .then( res => this.setState({ genders: this.genderPairs(res.data)}))
        .catch( res => dispatch(flashError('Gender Options not Loaded!')))
    }
  }

  genderPairs = (genders) => {
    return Object.entries(genders)
  }

  onChange = (e,{value}) =>
    this.setState({ selectedGender: value })

  render = () => (
    <Form>
      <Form.Field>Gender</Form.Field>
      { this.state.genders.map( (gender, index) => (
        <Form.Field key={index}>
          <Checkbox
            radio
            label={capitalize(gender[0])}
            name={gender[0]}
            value={gender[1]}
            checked={this.state.selectedGender === gender[1]}
            onChange={this.onChange}
          />
        </Form.Field>
      ))}
    </Form>
  )
}

export default connect()(GenderSelector)
