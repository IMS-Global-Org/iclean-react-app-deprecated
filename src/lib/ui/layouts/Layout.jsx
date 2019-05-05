import React from 'react'
import { Segment } from 'semantic-ui-react'
import { CenteredBlock } from '../../iclean-ui'

const layouts = {
  main: {
    width: '80%',
  }
}

export const Layout = ({ type = 'main', children }) => (
  <CenteredBlock>
    <Segment basic style={layouts[type]}>
      { children }
    </Segment>
  </CenteredBlock>
)
