import React from 'react'
import { Route, Switch } from 'react-router'
import Hello from '../components/Hello'
import MainLayout from '../layout'
import SignIn from '../pages/auth/SignIn'
import { 
  Clients as MasterClients,
  Doctors as MasterDoctors,
  Branches as MasterBranches,
  Patients as MasterPatients,
  Polis as MasterPolis,
  Services as MasterServices,
  DoctorSchedules as MasterDoctorSchedules,
  DoctorPolis as MasterDoctorPolis,
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
      <Route path="/patients" component={MasterPatients} />
      <Route path="/polis" component={MasterPolis} />
      <Route path="/services" component={MasterServices} />
      <Route path="/doctorSchedules" component={MasterDoctorSchedules} />
      <Route path="/coctorPolis" component={MasterDoctorPolis} />
    </Switch>
  </div>
)

export default routes
