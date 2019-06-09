import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Icon, Item } from 'semantic-ui-react'
import { Layout } from '../../../lib/iclean-ui'
import PsychographicItem from './PsychographicItem'

// Actions
import { indexPsychographics } from '../../../actions/settings'

// Show a list of possible Psychographic questions to client
class PsychographicQuizzes extends Component {

  componentDidMount = () => {
    const { psychographics, dispatch } = this.props

    if( psychographics.length <= 0 ) {
      dispatch(indexPsychographics())
    }
  }

  render = () => {
    const { psychographics } = this.props
    return (
      <Grid divided='vertically'>
        <Grid.Row>
          <Layout>
            <Header as='h1' icon>
              <Icon name='chart bar outline' />
              Psychographics
              <Header.Subheader>
                This sections contains questions relating to your life attitudes; you way of viewing life.
                This questionaire presents situations that will help you get a better idea and clarity on 
                your views on life and speculate your nature of being.
              </Header.Subheader>
            </Header>
          </Layout>
        </Grid.Row>

        <Grid.Row>
          <Item.Group>
            { psychographics.map( (psycho, index) => (
              <PsychographicItem key={index} psychographic={psycho} />
            ) ) }
          </Item.Group>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, props) => ({ psychographics: state.settings.profile.psychographics })

export default connect(mapStateToProps)(PsychographicQuizzes)
