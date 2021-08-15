import React from 'react'
import { Route, Switch } from 'react-router'
import Hello from '../components/Hello'
import MainLayout from '../layout'

const  routes = (
  <div>
    <Switch>
      <Route exact path="/" component={MainLayout} />
      <Route path="/summary" component={Hello} />
      <Route path="/hello" component={Hello} />
    </Switch>
  </div>
)

export default routes
