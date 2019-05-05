import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import Footer from './Footer'
import Header from './Header'


const Home = () => (
  <Grid>
    <Grid.Row columns={1}>
      <Grid.Column width={16}>
        <Header />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column width={16}>
        <Footer />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default connect()(Home)
