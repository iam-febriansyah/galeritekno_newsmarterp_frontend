import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import './App.css';
import PropTypes from 'prop-types';
import MainLayout from './layout';
import SignIn from './pages/auth/SignIn';
import { Switch, Route } from 'react-router-dom'
import 'devextreme/dist/css/dx.material.blue.light.css';

function App({ history }) {
  console.log(history)
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/dashboard" component={MainLayout}/>
        <Route exact path="/">
          <SignIn/>
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
