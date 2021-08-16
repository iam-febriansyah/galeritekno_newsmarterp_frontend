import { createSlice } from '@reduxjs/toolkit';

export const offlineSlice = createSlice({
  name: "sidebarToggle",
  initialState: {
    open: false,
    drawerWidth: 340,
  },
  reducers: {
    toggleSidebarMenu: state => {
      state.open = !state.open
    },
  },
})

export const { toggleSidebarMenu } = offlineSlice.actions

export default offlineSlice.reducer