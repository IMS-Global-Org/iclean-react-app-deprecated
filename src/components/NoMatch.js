import React from 'react'
import { Link } from 'react-router-dom'

// TODO add homepage css styles
const NoMatch = () => (
  <div>
    Page Not Found
    &nbsp;
    <Link to='/'>Home</Link>
  </div>
)

export default NoMatch
