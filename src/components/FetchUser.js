import React, { Component } from 'react'
import { connect } from 'react-redux'
import { validateToken } from '../actions/auth'

class FetchUser extends Component {
  defaults = { loaded: false }
  state = { ...this.defaults }

  componentDidMount = () => {
    const { isAuthenticated, dispatch } = this.props
    if( isAuthenticated ) {
      this.setAsLoaded()
    } else {
      dispatch(validateToken(this.setAsLoaded))
    }
  }

  componentWillReceiveProps = () => {
    const { loaded } = this.state
    if( !loaded ) {
      this.setAsLoaded()
    }
  }

  setAsLoaded = () => this.setState({ loaded: true })

  render = () => this.state.loaded ? this.props.children : null
}

const mapStateToProps = (state, props) => {
  return {
    isAuthenticated: state.user.id,
  }
}
export default connect(mapStateToProps)(FetchUser)
