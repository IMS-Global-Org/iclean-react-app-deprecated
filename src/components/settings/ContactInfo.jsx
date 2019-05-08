import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import { updateUserAddress } from '../../actions/user'

class ContactInfo extends Component {
  defaults = {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
  }
  state = { ...this.defaults }

  onChange = ({target: {id,value}}) => this.setState({ [id]: value })
  onClick = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(updateUserAddress(this.state))
  }

  render = () => {
    const{ street1, street2, city, state, zipcode, country } = this.state

    return (
      <Form>
        <Form.Input
          fluid
          label='Street'
          id='street1'
          value={street1}
          onChange={this.onChange} />
        <Form.Input
          fluid
          label='Street'
          id='street2'
          value={street2}
          onChange={this.onChange} />
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='City'
            id='city'
            value={city}
            onChange={this.onChange} />
          <Form.Input
            fluid
            label='State'
            id='state'
            value={state}
            onChange={this.onChange} />
          <Form.Input
            fluid
            label='Zipcode'
            id='zipcode'
            value={zipcode}
            onChange={this.onChange} />
          <Form.Input
            fluid
            label='Country'
            id='country'
            value={country}
            onChange={this.onChange} />
        </Form.Group>
        <Form.Button
          onClick={this.onClick}
          color='green'
        floated='right'>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default ContactInfo
