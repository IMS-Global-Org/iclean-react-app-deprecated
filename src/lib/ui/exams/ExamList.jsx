import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Header, Icon, Item } from 'semantic-ui-react'
import { Layout } from '../../../lib/iclean-ui'
import { resolvedPath } from '../../../actions/boiler-plates'
import { ExamItem } from './ExamItem'

// Actions
import { indexExams } from '../../../actions/exams'

// Show a list of possible Exams to client
class ExamList extends Component {

  componentDidMount = () => {
    const { exams, dispatch, match } = this.props
    const { examable_type, examable_id } = match.params
    debugger

    if( exams.length <= 0 ) {
      dispatch(indexExams(examable_type, examable_id))
    }
  }

  render = () => {
    const { exams, header, subHeader = '', examable_type = '' } = this.props
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
              <ExamItem key={index} exam={exam} examable_type={examable_type} />
            ) ) }
          </Item.Group>
        </Grid.Row>
      </Grid>
    )
  }
}

ExamList.propTypes = {
  exams: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
  ]),
}
ExamList.defaultProps = {
  exams: [],
}

/*
 *const resolvedPath = (path, obj) => {
 *  return path.split('.').reduce((prev, curr) => {
 *        return prev ? prev[curr] : null
 *    }, obj)
 *}
 */

const mapStateToProps = (state, props) => {
  const psychographics = resolvedPath(props.statePath, state)
  return { exams: psychographics.exams }
}
const ConnectedExamList = connect(mapStateToProps)(ExamList)

export {
  ConnectedExamList as ExamList,
}
