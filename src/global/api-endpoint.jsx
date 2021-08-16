const URL = process.env.REACT_APP_BACKEND;

const API_ENDPOINT = {
  MASTER: {
    CLIENTS: {
      GETALL: `${URL}/api/masterclients/getAll`,
      GETBYPK: (id) => `${URL}/api/masterclients/getByPk/${id}`,
      GETBYURL: (url) => `${URL}/api/masterclients/getByUrl/${url}`,
      GETBYSTATUS: (status) => `${URL}/api/masterclients/getByStatus/${status}`,
      POST: `${URL}/api/masterclients/post`,
      UPDATE: (id) => `${URL}/api/masterclients/update/${id}`,
      DELETE: (id) => `${URL}/api/masterclients/delete/${id}`,
      GETMULTIPLEVALUES: ({val1, val2, val3, val4}) => `${URL}/api/masterclients/getMultipleValues/${val1}/${val2}/${val3}/${val4}`,
      GETQUERYSTRING: `${URL}/api/masterclients/getQueryString`,
    },
    BRANCHES: {
      GETALL: `${URL}/api/masterBranches/getAll`,
      GETBYPK: (id) => `${URL}/api/masterBranches/getByPk/:${id}`,
      GETBYCLIENT: (id) => `${URL}/api/masterBranches/getByClient/:${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterBranches/getByStatus/${status}`,
      POST: `${URL}/api/masterBranches/post`,
      UPDATE: (id) => `${URL}/api/masterBranches/update/:${id}`,
      DELETE: (id) => `${URL}/api/masterBranches/delete/:${id}`,
    },
    DOCTORS: {
      GETALL: `${URL}/api/masterDoctors/getAll`,
      GETBYPK: (id) => `${URL}/api/masterDoctors/getByPk/${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterDoctors/getByStatus/${status}`,
      POST: `${URL}/api/masterDoctors/post`,
      UPDATE: (id) => `${URL}/api/masterDoctors/update/${id}`,
      DELETE: (id) => `${URL}/api/masterDoctors/delete/${id}`,
    },
    PATIENTS: {
      GETALL: `${URL}/api/masterPatients/getAll`,
      GETBYPK: (id) => `${URL}/api/masterPatients/getByPk/${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterPatients/getByStatus/${status}`,
      POST: `${URL}/api/masterPatients/post`,
      UPDATE: (id) => `${URL}/api/masterPatients/update/${id}`,
      DELETE: (id) => `${URL}/api/masterPatients/delete/${id}`,
    },
    POLIS: {
      GETALL: `${URL}/api/masterPolis/getAll`,
      GETBYPK: (id) => `${URL}/api/masterPolis/getByPk/${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterPolis/getByStatus/${status}`,
      POST: `${URL}/api/masterPolis/post`,
      UPDATE: (id) => `${URL}/api/masterPolis/update/${id}`,
      DELETE: (id) => `${URL}/api/masterPolis/delete/${id}`,
    },
    SERVICES: {
      GETALL: `${URL}/api/masterServices/getAll`,
      GETBYPK: (id) => `${URL}/api/masterServices/getByPk/${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterServices/getByStatus/${status}`,
      POST: `${URL}/api/masterServices/post`,
      UPDATE: (id) => `${URL}/api/masterServices/update/${id}`,
      DELETE: (id) => `${URL}/api/masterServices/delete/${id}`,
    },
    DOCTORSSCHEDULE: {
      GETALL: `${URL}/api/masterDoctorsSchedule/getAll`,
      GETBYPK: (id) => `${URL}/api/masterDoctorsSchedule/getByPk/${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterDoctorsSchedule/getByStatus/${status}`,
      POST: `${URL}/api/masterDoctorsSchedule/post`,
      UPDATE: (id) => `${URL}/api/masterDoctorsSchedule/update/${id}`,
      DELETE: (id) => `${URL}/api/masterDoctorsSchedule/delete/${id}`,
    },
    DOCTORPOLIS: {
      GETALL: `${URL}/api/masterDoctorsPolis/getAll`,
      GETBYPK: (id) => `${URL}/api/masterDoctorsPolis/getByPk/${id}`,
      GETBYSTATUS: (status) => `${URL}/api/masterDoctorsPolis/getByStatus/${status}`,
      POST: `${URL}/api/masterDoctorsPolis/post`,
      UPDATE: (id) => `${URL}/api/masterDoctorsPolis/update/${id}`,
      DELETE: (id) => `${URL}/api/masterDoctorsPolis/delete/${id}`,
    }
  },
  REGISTRATIONS: {
    GETALL: `${URL}/api/registrations/getAll`,
    GETBYPK: (id) => `${URL}/api/registrations/getByPk/${id}`,
    GETBYSTATUS: (status) => `${URL}/api/registrations/getByStatus/${status}`,
    POST: `${URL}/api/registrations/post`,
    UPDATE: (id) => `${URL}/api/registrations/update/${id}`,
    DELETE: (id) => `${URL}/api/registrations/delete/${id}`,
  },
  AUTH: {
    GETALL: `${URL}/api/authUsers/getAll`,
    GETBYPK: (id) => `${URL}/api/authUsers/getByPk/${id}`,
    GETBYSTATUS: (status) => `${URL}/api/authUsers/getByStatus/${status}`,
    POST: `${URL}/api/authUsers/post`,
    UPDATE: (id) => `${URL}/api/authUsers/update/${id}`,
    DELETE: (id) => `${URL}/api/authUsers/delete/${id}`,
    RESETPASSWORD: (id) => `${URL}/api/authUsers/resetPassword/${id}`,
    SIGNIN: `${URL}/api/authUsers/signIn`,
    SIGNOUT: `${URL}/api/authUsers/signOut`,
  },
};

export const { MASTER, REGISTRATIONS, AUTH } = API_ENDPOINT;

export const { CLIENTS, BRANCHES, DOCTORS, PATIENTS, POLIS, SERVICES, DOCTORSSCHEDULE, DOCTORPOLIS } =  MASTER;

export default API_ENDPOINT;