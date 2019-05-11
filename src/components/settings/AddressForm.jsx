import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Select } from 'semantic-ui-react'
import { isNumber, snakeCase, camelCase } from 'lodash'

import {
  updateUserAddress,
  createUserAddress,
} from '../../actions/user'

class AddressForm extends Component {
  defaults = {
    id:'',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    addressType: '',
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
    const { id: oldId } = this.state
    const { address: newAddress } = props
    if( newAddress && oldId !== newAddress.id ) {
      this.setState({ ...this.toData() })
    }
  }

  isNewForm = () => !isNumber(this.state.id)
  toParams = () => {
    const formData = {}
    Object.keys(this.state).forEach( (key) => {
      formData[snakeCase(key)] = this.state[key]
    })
    return formData
  }
  toData = () => {
    const { address } = this.props
    const data = {}
    const stateKeys = Object.keys(this.state)
    Object.keys(this.props.address).forEach( (key) =>{
      const newKey = camelCase(key)
      if( stateKeys.includes(newKey) ) {
        data[newKey] = address[key]
      }
    })
    return data
  }

  onChange = ({target: {id, value}}) => this.setState({ [id]: value })
  onSelect = (e, {id, value}) => this.setState({ [id]: value })
  onClick = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    if( this.isNewForm() ){
      dispatch(createUserAddress(this.toParams()))
    } else {
      dispatch(updateUserAddress(this.toParams()))
    }
  }

  render = () => {
    const{
      street1, street2, city, state,
      zipcode, country, addressType
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
            id='addressType'
            placeholder='Address Type'
            value={addressType}
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
          <Form.Button
            color='green'
            onClick={this.onClick}>
            { this.isNewForm() ? 'Create' : 'Update' }
          </Form.Button>
        </Segment>
      </Form>
    )
  }
}

export default connect()(AddressForm)
