import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Segment, Divider, Grid, Form,
  Header, Icon, Search, Segment
} from 'semantic-ui-react'

// Actions
import { handleLogin } from './actions/auth'


class Login extends Component {
  defaults = { email: '', password: '' }
  state = { ...this.defaults }

  onChange = ({ target: {id, value}}) => this.setState({ [id]: value })

  handleSubmit = (event) => {
    e.preventDefault();
    const { dispatch, history } = this.props
    const { email, password } = this.state
    dispatch(handleLogin(email, password, history))
  }

  render = () => {
    const { email, password } = this.state

    return (
      <Segment placeholder>
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
                  
                </Form.Field>
              </Form>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='globe' />
                Register New User
              </Header>
              <Button primary>Create</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {

  }
}

export default connect(mapStateToProps)(Login)
