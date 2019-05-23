import React from 'react'
import { Wrapper } from '../Helpers'
import { shallow, mount } from 'enzyme'

import FetchUser from '../../components/FetchUser'
import Login from '../../components/Login'


const Mount = mount(
  <Wrapper>
    <FetchUser />
  </Wrapper>
)

const Shallow = shallow(
  <Wrapper>
    <FetchUser />
  </Wrapper>
)

beforeEach(() => {
})

afterEach(() => {
  // logout
})

describe('FetchUser', () => {
  xit('authenicates the client/User', () => {

  })
})
