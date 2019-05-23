import React from 'react'
import { Wrapper, IndexWrapper } from '../Helpers'
import { mount, shallow } from 'enzyme'
import TestRenderer from 'react-test-renderer'
import App from '../../components/App'
import NavBar from '../../components/navbar/NavBar'
import FetchUser from '../../components/FetchUser'
import Settings from '../../components/settings/Settings'
import { Switch, Route } from 'react-router-dom'

import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'


const index = mount(
  <Wrapper>
    <App />
  </Wrapper>
)


describe('App.jsx', () => {

  describe('Creates Snapshot', () => {
    it('of the Main App', () => {
      const app = TestRenderer.create(
        <IndexWrapper>
          <App />
        </IndexWrapper>
      )

      // main application home page snapshot
      let tree = app.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })


  describe('Contains Component', () => {
    it('Navbar/Menu', () => {
      expect(index.find(NavBar)).toHaveLength(1)
    })

    it('FetchUser', () => {
      expect(index.find(FetchUser)).toHaveLength(1)
    })
  })

  describe('Has Switch Route', () => {
    xit('/ => Home', () => {
      const home = index
        .find(Route)
        .findWhere( r => r.props().path === '/')
      expect(home).toHaveLength(1)
    })
    xit('/login => Login',() => {
      const login = index
        .find(Route)
        .findWhere( r => r.props().path === '/login')
      expect(login).toBeDefined()
    })
    xit('/register => Register', () => {
      const register = index
        .find(Route)
        .findWhere( r => r.props().path === '/register')
      expect(register).toBeDefined()
    })
    xit('/logout => Logout', () => {
      const logout = index
        .find(Route)
        .findWhere( r => r.props().path === '/logout')
      expect(logout).toBeDefined()
    })
    xit('/public => Public', () => {
      const publik = index
        .find(Route)
        .findWhere( r => r.props().path === '/public')
      expect(publik).toBeDefined()
    })
    xit('/settings => Settings', () => {
      const regex = /\/settings\/:.+/
      let settings = index
        .find(Route)
        .findWhere( r => r.props().path.match(regex))
      expect(settings).toHaveLength(1)
    })
    xit(' => NoMatch', () => {
      const noMatch = index
        .find(Route)
        .findWhere( r => r.props().path === '' )
      expect(noMatch).toBeDefined()
    })
  })

})
