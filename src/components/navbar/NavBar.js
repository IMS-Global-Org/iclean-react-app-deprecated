import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleLogout } from '../actions/auth'
import { Menu, Dropdown } from 'semantic-ui-react'


class NavBar extends Component {
  defaults = { activeItem: '' }
  state = { ...defaults }

  handleItemClick = ({ name: activeItem }) => this.setState({ activeItem })
}

const mapStateToProps = (state, props) => {}

export default connect(mapStateToProps)(NavBar)
