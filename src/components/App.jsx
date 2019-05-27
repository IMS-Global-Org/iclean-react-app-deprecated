import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import NoMatch from './NoMatch'
import FetchUser from './FetchUser'
import NavBar from './navbar/NavBar'
import Flash from './flash/Flash'

// Global Styles
import 'semantic-ui-css/semantic.min.css'

// Helper Components
import { Dimmer, Loader } from 'semantic-ui-react'

// Application HOC Components for routes
const Home = lazy(() => import ('./home/Home'))
const Settings = lazy(() => import ('./settings/Settings'))
const Login = lazy(() => import ('./Login'))
const Register = lazy(() => import ('./Register'))
const Public = lazy(() => import ('./public/Public'))


// Main Application
const App = () => (
  <React.Fragment>

    <NavBar />
    <Flash />

    <FetchUser>
      <Suspense fallback={<Dimmer active><Loader>Loading...</Loader></Dimmer>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/public' component={Public} />
          <ProtectedRoute path='/settings/:path' component={Settings} />

          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </FetchUser>

  </React.Fragment>
)

export default App;
