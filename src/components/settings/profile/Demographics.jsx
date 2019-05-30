import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import GenderSelector from './GenderSelector'



const Demographics = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column width={16} textAlign='center'>
        <Header as='h1' icon>
          <Icon name='settings' />
          Demographics
          <Header.Subheader>
            Demographics information and description
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
      <Grid.Column>Age</Grid.Column>
      <Grid.Column>Race</Grid.Column>
      <Grid.Column>Ethnicity</Grid.Column>
      <Grid.Column>
        <GenderSelector />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Demographics
