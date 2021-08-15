import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import './App.css';
import routes from './routes'
import PropTypes from 'prop-types'
import MainLayout from './layout'
import 'devextreme/dist/css/dx.material.blue.light.css';

function App({ history }) {
  console.log(history)
  return (
    <ConnectedRouter history={history}>
      <MainLayout/>
     
    </ConnectedRouter>
  );
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
