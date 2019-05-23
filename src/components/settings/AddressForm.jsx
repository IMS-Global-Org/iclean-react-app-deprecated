import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Select, Button } from 'semantic-ui-react'
import { isNumber, isEqual } from 'lodash'

import {
  updateUserAddress,
  createUserAddress,
  deleteUserAddress,
} from '../../actions/user'

class AddressForm extends Component {
  defaults = {
    form: {
      id:'',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      address_type: '',
    },
    hasChanges: false,
  }
  state = { ...this.defaults }

  addressTypeOptions = [
    { key: 'home', text: 'Home', value: 'home' },
    { key: 'work', text: 'Work', value: 'work' },
    { key: 'other', text: 'Other', value: 'other' },
  ]

  componentDidMount = () => this.updateLocalState(this.props)
  componentWillReceiveProps = (nextProps) => this.updateLocalState(nextProps)
  updateLocalState = ( props ) => {
    const oldAddress = this.state.form
    const { address: newAddress } = props
    if( newAddress && !isEqual(oldAddress, newAddress) ) {
      this.setState({ form: { ...newAddress } })
    }
  }

  isNewForm = () => !isNumber(this.state.form.id)

  onChange = ({target: {id, value}}) => this.setState({
    form: { ...this.state.form, [id]: value },
    hasChanges: true,
  })
  onSelect = (e, {id, value}) => this.setState({
    form: { ...this.state.form, [id]: value },
    hasChanges: true,
  })
  onCreate = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    if( this.isNewForm() ){
      this.setState({ hasChanges: !this.state.hasChanges },() => {
        dispatch(createUserAddress(this.state.form))
      })
    } else {
      this.setState({ hasChanges: !this.state.hasChanges },() => {
        dispatch(updateUserAddress(this.state.form))
      })
    }
  }
  onDelete = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(deleteUserAddress(this.state.form.id))
  }

  render = () => {
    const{
      form: {
        street1, street2, city, state,
        zipcode, country, address_type,
      },
      hasChanges,
    } = this.state

    return (
      <Form>
        <Segment
          basic inline required
          textAlign='right'
          as={Form.Field}>
          <label>Address Type</label>
          <Select
            required
            width={2}
            id='address_type'
            placeholder='Address Type'
            value={address_type}
            onChange={this.onSelect}
            options={this.addressTypeOptions} />
        </Segment>
        <Form.Input
          fluid required
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
            fluid required
            label='City'
            id='city'
            value={city}
            onChange={this.onChange} />
          <Form.Input
            fluid required
            label='State'
            id='state'
            value={state}
            onChange={this.onChange} />
          <Form.Input
            fluid required
            label='Zipcode'
            id='zipcode'
            value={zipcode}
            onChange={this.onChange} />
          <Form.Input
            fluid required
            label='Country'
            id='country'
            value={country}
            onChange={this.onChange} />
        </Form.Group>
        <Segment basic textAlign='right'>
          <Button
            color='green'
            onClick={this.onCreate}>
            { this.isNewForm() ? 'Create' : 'Update' }
          </Button>
          { !this.isNewForm() &&
            <Button
              color='red'
              disabled={hasChanges}
              onClick={this.onDelete}>
              Delete
            </Button>
          }
        </Segment>
      </Form>
    )
  }
}

export default connect()(AddressForm)
