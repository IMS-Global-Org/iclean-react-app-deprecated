import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class RightNav extends Component {
  defaults = { activeItem: '' }
  state = { ...defaults }

  onClick = ({ name: activeItem }) => this.setState({ activeItem })

  renderLoggedIn = () => {
    const { activeItem } = this.state
    return (
      <React.Fragment>
        <Dropdown item text='Settings'>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to='/settings/contact_info'
              active={ activeItem === 'contact_info' }
              onClick={this.onClick}>
              Contact Info
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='logout'
          as={Link}
          to='/logout'
          active={activeItem === 'logout'}
          onClick={this.onClick} />
      </React.Fragment>
    )
  }

  renderLoggedOut = () => {
    const { activeItem } = this.state
    return (
      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          as={Link}
          to='/login'
          active={activeItem === 'logout'}
          onClick={this.onClick} />
      </Menu.Menu>
    )
  }

  render = () => {
    const { user } = this.props
    const userState = user.id ? 'In' : 'Out'
    return this[`renderLogged${userState}`]
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(RightNav)
