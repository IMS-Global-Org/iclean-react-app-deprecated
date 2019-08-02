import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Header, Icon, Item } from 'semantic-ui-react'
import { Layout } from '../../../lib/iclean-ui'

import { Exams, ExamList, Questions } from '../../../lib/iclean-ui'

const subHeaderText = <span>
  This sections contains questions relating to your life attitudes; your way of viewing life.
  This questionnaire presents situations that will help us get a better idea and clarity 
  with respect to your views on life. In turn it will help us more precisely speculate about
  your nature and way of being.
</span>

const headerText = 'Psychographics'

// TODO
//  - Implement React Router as a way to differentiate between displayed Components
//  - Load the right data depending on the route that will be displayed
//  - Store each state collection of data under psyshographics 
const Psychographics = () => (
  <Grid divided='vertically'>
    <Grid.Row>
      <Layout>
        <Header as='h1' icon>
          <Icon name='chart bar outline' />
          { headerText }
          <Header.Subheader>
            { subHeaderText }
          </Header.Subheader>
        </Header>
      </Layout>
    </Grid.Row>

    <Grid.Row>
      <Switch>
        <Route path='/settings/profile/:examable_type/exams' component={Exams} />
        <Route path='/settings/profile/:examable_type/questions' component={Questions} />
        <Route path='/default/remove/me' component={ExamList} />
      </Switch>
    </Grid.Row>
  </Grid>
)

  /*
   *<Exams 
   *  header='Psychographics'
   *  subHeader={subHeaderText}
   *  statePath='settings.profile.psychographics'
   *  examable_type='psychographic' />
   */
export default connect()(Psychographics)
