import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import { Segment, Grid, Menu } from 'semantic-ui-react'

// Component to display according to the tabs
import ContactInfo from './ContactInfo'
import Password from './Password'
import Profile from './Profile'
import WorkHistory from './WorkHistory'

// Simple HOC Component
class Settings extends Component {
  defaults = { activeItem: '' }
  state = { ...this.defaults }

  componentDidMount = () => this.updateLocalState(this.props)
  componentWillReceiveProps = (nextProps) => this.updateLocalState(nextProps)
  updateLocalState = ( props ) => {
    const { params: { path: activeItem }} = props.match
    this.setState({ activeItem })
  }

  onClick = (e, {name: activeItem}) => this.setState({ activeItem })

  render = () => {
    const { activeItem } = this.state

    return (
      <Segment basic padded>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='contact_info'
                as={Link}
                to='/settings/contact_info'
                active={ activeItem === 'contact_info' }
                onClick={this.onClick} />
              <Menu.Item
                name='password'
                as={Link}
                to='/settings/password'
                active={ activeItem === 'password'}
                onClick={this.onClick} />
              <Menu.Item
                name='profile'
                as={Link}
                to='/settings/profile'
                active={ activeItem === 'profile' }
                onClick={this.onClick} />
              <Menu.Item
                name='work_history'
                as={Link}
                to='/settings/work_history'
                active={ activeItem === 'work_history' }
                onClick={this.onClick} />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Switch>
              <Route exact path='/settings/contact_info' component={ContactInfo} />
              <Route exact path='/settings/password' component={Password} />
              <Route exact path='/settings/profile' component={Profile} />
              <Route exact path='/settings/work_history' component={WorkHistory} />
              <Route component={ContactInfo} />
            </Switch>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default connect()(Settings)
