import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import './App.css';
import routes from './routes'
import PropTypes from 'prop-types'

function App({ history }) {
  console.log(history)
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  );
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
