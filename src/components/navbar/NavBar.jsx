import React from 'react'
import { Menu } from 'semantic-ui-react'

import LeftNav from './LeftNav'
import RightNav from './RightNav'


const NavBar = () => (
  <Menu>
    <LeftNav />
    <RightNav />
  </Menu>
)

export default NavBar
