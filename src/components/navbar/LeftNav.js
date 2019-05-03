import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class LeftNav extends Component {
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

  render = () => {
    const { activeItem } = this.state
    return (
      <Menu.Menu>
        <Menu.Item
          name='home'
          as={Link}
          to='/'
          active={activeItem === 'home'}
          onClick={this.onClick} />
      </Menu.Menu>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    activeItem: state.navbar.activeItem,
  }
}

export default withRouter(connect(mapStateToProps)(LeftNav))
