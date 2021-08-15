import React from 'react'
import { Route, Switch } from 'react-router'
import Hello from '../components/Hello'
import MainLayout from '../layout'
import SignIn from '../pages/auth/SignIn'
import { 
  Clients as MasterClients,
  Doctors as MasterDoctors,
  Branches as MasterBranches
} from '../pages/master'
const  routes = (
  <div>
    <Switch>
      {/* <Route exact path="/" component={MainLayout} /> */}
      <Route path="/summary" component={Hello} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/clients" component={MasterClients} />
      <Route path="/branches" component={MasterBranches} />
      <Route path="/doctors" component={MasterDoctors} />
    </Switch>
  </div>
)

export default routes
