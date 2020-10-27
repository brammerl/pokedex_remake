import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppProvider from '../../provider/AppProvider';
import LandingPage from '../../containers/LandingPage';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </AppProvider>
    </Router>
  )
}
