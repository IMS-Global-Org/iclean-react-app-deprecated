import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Menu } from 'semantic-ui-react'

// Component to display according to the tabs
import ContactInfo from './ContactInfo'
import Password from './Password'
import Profile from './Profile'


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
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='contact_info'
              active={ activeItem === 'contact_info' }
              onClick={this.onClick} />
            <Menu.Item
              name='password'
              active={ activeItem === 'password'}
              onClick={this.onClick} />
            <Menu.Item
              name='profile'
              active={ activeItem === 'profile' }
              onClick={this.onClick} />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          {{
            'contact_info': <ContactInfo />,
            'password': <Password />,
            'profile': <Profile />,
          }[activeItem || 'contact_info']}
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect()(Settings)
