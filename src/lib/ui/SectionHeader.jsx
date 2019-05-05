import React from 'react'
import { Divider, Header } from 'semantic-ui-react'

const SectionHeader = ({ title, icon }) => (
  <Divider section horizontal>
    <Header as='h1' icon={icon} content={title} />
  </Divider>
)

export { SectionHeader }
