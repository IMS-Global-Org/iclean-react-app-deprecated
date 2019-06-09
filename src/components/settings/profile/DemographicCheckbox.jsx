import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Checkbox } from 'semantic-ui-react'
import axios from 'axios'
import { titleize } from '../../../lib/iclean-ui'


class DemographicCheckbox extends Component {
  defaults = {options: [], selected: ''}
  state = { ...this.defaults }

  componentDidMount = () => {
    const {userId, optionType, optionTypes} = this.props
    
    const url = `/api/users/${userId}/demographics/${optionTypes}`
    axios.get(url)
      .then( res => {
        const options = Object.entries(res.data.options)
        const demographic = res.data.value
        this.setState({
          options: options,
          selected: demographic[optionType] ? options.find(o => o[0] === demographic[optionType])[1] : ''
        })
      })
  }

  onChange = (e,{value}) => this.setState({ selected: value }, () => {
    const {userId, optionType} = this.props
    const {options, selected} = this.state
    const url = `/api/users/${userId}/demographics`
    const params = { demographic: { [optionType]: selected } }
    axios.patch(url, params)
      .then( res => {
        this.setState({ selected: options.find( o => o[0] === res.data[optionType])[1] || '' })
      })
  })


  render = () => {
    const { title } = this.props
    const { options, selected } = this.state
    return (
      <Form>
        <Form.Field>{title}</Form.Field>
        { options.map((option, index) => (
          <Form.Field key={index}>
            <Checkbox
              radio
              label={titleize(option[0])}
              name={option[0]}
              value={option[1]}
              checked={selected === option[1]}
              onChange={this.onChange}
            />
          </Form.Field>
        )) }
      </Form>
    )
  }
}

const mapStateToProps = (state, props) => ({ userId: state.user.id })

export default connect(mapStateToProps)(DemographicCheckbox)
