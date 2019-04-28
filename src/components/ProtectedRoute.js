import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  const propsHandler = (props) => (
    isAuthenticated
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/login', state: { from: props.location }}} />)
  )
  return (
    <Route {...rest} render={propsHandler} />
  )
}

const mapStateToProps = (state, props) => {
  return {
    isAuthenticated: state.user.id,
  }
}

export default connect(mapStateToProps)(ProtectedRoute)
