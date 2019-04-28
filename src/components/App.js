import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import NoMatch from './NoMatch'
import FetchUser from './FetchUser'

// Application HOC Components for routes
import Home from './home/Home'
import Settings from './settings/Settings'

// Global Styles
import '../css/App.css';

// Global Imgs
import logo from '../imgs/logo.svg';


// TODO create routes for main application
const App = () => (
  <React.Fragment>
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedRoute path='/settings' component={Settings} />

        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </React.Fragment>
)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
