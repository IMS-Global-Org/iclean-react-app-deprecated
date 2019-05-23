import React from 'react'
import { Wrapper } from '../Helpers'
import { shallow, mount } from 'enzyme'

import Login from '../../components/Login'

const Mount = mount(
  <Wrapper initialEntry='/login'>
    <Login />
  </Wrapper>
)
const Shallow = shallow(
  <Wrapper initialEntry='/login'>
    <Login />
  </Wrapper>
)


describe('Login', () => {
  it('accepts clients username', () => {
    const email = 'brennick.sci@gmail.com'
    // Mount.find("input[id='email'][type='text']").simulate('change', {
    //   target: { name: 'username', value: email }
    // })
    // expect(wrapper.state('username')).toEqual(email)
  })
})
