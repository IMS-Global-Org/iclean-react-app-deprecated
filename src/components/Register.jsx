import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/auth'
import {
  Header, Form,
  Button, Segment,
} from 'semantic-ui-react'
import { CenteredBlock } from '../lib/ui/IClean'


class Register extends Component {
  defaults = { email: '', password: '', confirmation: '' }
  state = { ...this.defaults }

  onSubmit = (event) => {
    event.preventDefault()
    const { email, password, confirmation } = this.state
    const { dispatch, history } = this.props
    if( password === confirmation ) {
      dispatch(registerUser(email, password, confirmation, history))
    } else {
      alert('Passwords do NOT match!')
    }
  }

  onChange = ({target: {id, value}}) => this.setState({ [id]: value })

  render = () => {
    const { email, password, confirmation } = this.state

    return (
      <CenteredBlock>
        <Segment placeholder>
          <Header as='h1' textAlign='center'>User Registration</Header>
          <Form>
            <Form.Field>
              <label>E-mail</label>
              <input
                id='email'
                placeholder='E-mail'
                required
                value={email}
                onChange={this.onChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                id='password'
                placeholder='Password'
                type='password'
                required
                value={password}
                onChange={this.onChange} />
            </Form.Field>
            <Form.Field>
              <label>Password Confirmation</label>
              <input
                id='confirmation'
                placeholder='Password Confirmation'
                type='password'
                required
                value={confirmation}
                onChange={this.onChange} />
            </Form.Field>
            <Segment basic textAlign='center'>
              <Button type='submit' onClick={this.onSubmit}>Register</Button>
            </Segment>
          </Form>
        </Segment>
      </CenteredBlock>
    )
  }
}

const mapStateToProps = (state, props) => {}

export default connect(mapStateToProps)(Register)
