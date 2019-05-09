import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import { handleLogout } from '../../actions/auth'


class RightNav extends Component {
  defaults = { activeItem: '' }
  state = { ...this.defaults }

  componentDidMount = () => this.setActiveItem(this.props)
  componentWillReceiveProps = (nextProps) => this.setActiveItem(nextProps)

  setActiveItem = (props) => {
    const { activeItem: currActItem } = this.state
    const { activeItem: nextActItem } = this.props
    if( nextActItem !== currActItem ) {
      this.setState({ activeItem: nextActItem })
    }
  }

  onClick = ({ name: activeItem }) => this.setState({ activeItem })

  renderLoggedIn = () => {
    const { activeItem } = this.state
    const { dispatch, history } = this.props
    return (
      <Menu.Menu position='right'>
        <Dropdown item text='Settings'>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to='/settings/contact_info'
              active={ activeItem === 'contact_info' }
              onClick={this.onClick}>
              Contact Info
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/settings/password'
              active={ activeItem === 'password' }
              onClick={this.onClick}>
              Password
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to='/settings/profile'
              active={ activeItem === 'profile' }
              onClick={this.onClick}>
              Profile
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='logout'
          as={Link}
          to='/logout'
          active={activeItem === 'logout'}
          onClick={() => dispatch(handleLogout(history))} />
      </Menu.Menu>
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
          active={activeItem === 'login'}
          onClick={this.onClick} />
      </Menu.Menu>
    )
  }

  render = () => {
    const { user } = this.props
    const userState = user.id ? 'In' : 'Out'
    return this[`renderLogged${userState}`]()
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    activeItem: state.navbar.activeItem,
  }
}

export default withRouter(connect(mapStateToProps)(RightNav))
