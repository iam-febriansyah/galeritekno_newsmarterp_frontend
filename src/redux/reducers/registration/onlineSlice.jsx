import { createSlice } from '@reduxjs/toolkit';

export const onlineSlice = createSlice({
  name: "onlineRegistrationData",
  initialState: {
    page: 0,
    registartionData: {
        MRNo: '',

    },
    personalData: {
        name: '',
        nik: '',
        gender: 0,
        placebirth: '',
        datebirth: '',
        age: now() - this.datebirth
    },
    MRNo: '',
    NIK: '',
    MRNo: '',
    NIK: '',
    MRNo: '',
    NIK: '',
    MRNo: '',
    NIK: '',
    MRNo: '',
    NIK: '',
    MRNo: '',
    NIK: '',
    MRNo: '',
    NIK: '',
  },
  reducers: {
    toggleSidebarMenu: state => {
      state.open = !state.open
    },
  },
})

export const { toggleSidebarMenu } = onlineSlice.actions

export default onlineSlice.reducer