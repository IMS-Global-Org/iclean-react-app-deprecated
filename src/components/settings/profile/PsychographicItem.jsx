import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'


class PsychographicItem extends Component {
  render = () => {
    const { id, title, description } = this.props.psychographic
    return (
      <Item>
        <Item.Content>
          <Item.Header
            to={`/settings/profile/psychographics/${id}/quiz`}
            as={Link}>
            {title}
          </Item.Header>
          <Item.Description>
            { description }
          </Item.Description>
        </Item.Content>
      </Item>
    )
  }
}

export default connect()(PsychographicItem)
