import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Segment, Divider, Grid, Form,
  Header, Icon, Button,
} from 'semantic-ui-react'
import { CenteredBlock } from '../lib/IClean'

// Actions
import { handleLogin } from '../actions/auth'


class Login extends Component {
  defaults = { email: '', password: '' }
  state = { ...this.defaults }

  onChange = ({ target: {id, value}}) => this.setState({ [id]: value })

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props
    const { email, password } = this.state
    dispatch(handleLogin(email, password, history))
  }

  render = () => {
    const { email, password } = this.state

    return (
      <CenteredBlock>
        <Segment placeholder style={{ width: '50%' }}>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='user circle outline' />
                  User Login
                </Header>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>E-mail</label>
                    <input
                      autoFocus
                      required
                      id='email'
                      value={email}
                      placeholder='E-mail'
                      onChange={this.onChange} />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      required
                      id='password'
                      value={password}
                      placeholder='Password'
                      type='password'
                      onChange={this.onChange} />
                  </Form.Field>
                  <Segment textAlign='center' basic>
                    <Button primary type='submit'>Submit</Button>
                  </Segment>
                </Form>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='globe' />
                  Register New User
                </Header>
                <Button primary as={Link} to='/register'>Create</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </CenteredBlock>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default connect(mapStateToProps)(Login)
