import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'


const ExamItem = ({ exam: {id, title, description}, examable_type }) => (
  <Item>
    <Item.Content>
      <Item.Header
        to={`/settings/profile/${examable_type}/exams/${id}/questions`}
        as={Link}>
        {title}
      </Item.Header>
      <Item.Description>
        { description }
      </Item.Description>
    </Item.Content>
  </Item>
)

ExamItem.propTypes = {
  exam: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  examable_type: PropTypes.string.isRequired,
}

const ConnectedExamItem = connect()(ExamItem)

export {
  ConnectedExamItem as ExamItem,
}
