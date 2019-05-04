import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'

const Home = () => (
  <div>
    <Footer />
  </div>
)

export default connect()(Home)
