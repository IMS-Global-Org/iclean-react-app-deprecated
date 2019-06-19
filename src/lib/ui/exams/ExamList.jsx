import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Icon, Item } from 'semantic-ui-react'
import { Layout } from '../../../lib/iclean-ui'
import ExamItem from './ExamItem'

// Actions
import { indexExams } from '../../../actions/settings'

// Show a list of possible Exams to client
class ExamList extends Component {

  componentDidMount = () => {
    const { exams, dispatch } = this.props

    if( exams.length <= 0 ) {
      dispatch(indexExams())
    }
  }

  render = () => {
    const { exams, header, subHeader = '' } = this.props
    return (
      <Grid divided='vertically'>
        <Grid.Row>
          <Layout>
            <Header as='h1' icon>
              <Icon name='chart bar outline' />
                { header }
              <Header.Subheader>
                { subHeader }
              </Header.Subheader>
            </Header>
          </Layout>
        </Grid.Row>

        <Grid.Row>
          <Item.Group>
            { exams.map( (exam, index) => (
              <ExamItem key={index} exam={exam} />
            ) ) }
          </Item.Group>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, props) => ({ exams: state.settings.profile.exams })

export default connect(mapStateToProps)(ExamList)
