import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import NoMatch from './NoMatch'
import FetchUser from './FetchUser'

// Application HOC Components for routes
import NavBar from './navbar/NavBar'
import Home from './home/Home'
import Settings from './settings/Settings'
import Login from './Login'
import Register from './Register'
import Public from './public/Public'

// Global Styles
import 'semantic-ui-css/semantic.min.css'

// TODO create routes for main application
const App = () => (
  <React.Fragment>

    <NavBar />

    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/public' component={Public} />
        <ProtectedRoute path='/settings/:path' component={Settings} />

        <Route component={NoMatch} />
      </Switch>
    </FetchUser>

  </React.Fragment>
)

export default App;
