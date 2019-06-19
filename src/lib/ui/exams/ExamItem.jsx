import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'


const ExamItem = ({ exam: {id, tittle, description} }) => (
  <Item>
    <Item.Content>
      <Item.Header
        to={`/settings/profile/exams/${id}/questions`}
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
  })
}

export default connect()(ExamItem)
