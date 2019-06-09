import React from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Icon } from 'semantic-ui-react'
import DemographicCheckbox from './DemographicCheckbox'
import AgeSelector from './AgeSelector'

// Selectors
const Selectors = [
  { title: 'Race', optionType: 'race', optionTypes: 'races' },
  { title: 'Ethnicity', optionType: 'ethnicity', optionTypes: 'ethnicities' },
  { title: 'Gender', optionType: 'gender', optionTypes: 'genders' },
]

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
      <Grid.Column>
        <AgeSelector />
      </Grid.Column>
      { Selectors.map((selector, index) => (
        <Grid.Column key={index}>
          <DemographicCheckbox
            title={selector.title}
            optionType={selector.optionType}
            optionTypes={selector.optionTypes}
          />
        </Grid.Column>
      )) }
    </Grid.Row>
  </Grid>
)

export default connect()(Demographics)
