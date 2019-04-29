import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import NoMatch from './NoMatch'
import FetchUser from './FetchUser'

// Application HOC Components for routes
import NavBar from './navbar/NavBar'
import Home from './home/Home'
import Settings from './settings/Settings'

// Global Styles
import 'semantic-ui-css/semantic.min.css'

// TODO create routes for main application
const App = () => (
  <React.Fragment>

    <NavBar />

    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedRoute path='/settings' component={Settings} />

        <Route component={NoMatch} />
      </Switch>
    </FetchUser>

  </React.Fragment>
)

export default App;
