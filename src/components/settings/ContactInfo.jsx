import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

import {
  updateContactInfoAddress,
  showContactInfoAddress,
} from '../../actions/settings'

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

  componentDidMount = () => this.updateLocalState(this.props)
  componentWillReceiveProps = (nextProps) => this.updateLocalState(nextProps)
  updateLocalState = ( props ) => {
    const { address, dispatch } = props
    if( !address ) {
      // TODO get the address from the database
      dispatch(showContactInfoAddress())
    } else {
      this.setState({ ...address })
    }
  }

  onChange = ({target: {id,value}}) => this.setState({ [id]: value })
  onClick = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(updateContactInfoAddress(this.state))
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
          { this.props.address ? 'Update' : 'Create' }
        </Form.Button>
      </Form>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    address: state.settings.contact_info.address
  }
}

export default connect(mapStateToProps)(ContactInfo)
