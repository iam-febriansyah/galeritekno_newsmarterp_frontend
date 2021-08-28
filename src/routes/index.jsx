import React from 'react';
import { Route, Switch } from 'react-router';
import Hello from '../components/Hello';
import MainLayout from '../layout';
import SignIn from '../pages/auth/SignIn';
import RegistrationForm from '../components/RegistrationOnline/RegistrationForm';
import RawatJalan from '../pages/RawatJalan'
import { 
  Clients as MasterClients,
  Doctors as MasterDoctors,
  Branches as MasterBranches,
  Patients as MasterPatients,
  Polis as MasterPolis,
  Services as MasterServices,
  DoctorSchedules as MasterDoctorSchedules,
  DoctorsPolis as MasterDoctorsPolis,
} from '../pages/master';

const  routes = (
  <div>
    <Switch>
      <Route path="/admin/summary" component={Hello} />
      <Route path="/admin/clients" component={MasterClients} />
      <Route path="/admin/branches" component={MasterBranches} />
      <Route path="/admin/doctors" component={MasterDoctors} />
      <Route path="/admin/patients" component={MasterPatients} />
      <Route path="/admin/polis" component={MasterPolis} />
      <Route path="/admin/services" component={MasterServices} />
      <Route path="/admin/doctorSchedules" component={MasterDoctorSchedules} />
      <Route path="/admin/doctorPolis" component={MasterDoctorsPolis} />
      <Route path="/admin/RegistrationForm" component={RegistrationForm} />
      <Route path="/admin/rawatjalan" component={RawatJalan} />
    </Switch>
  </div>
)

export default routes
