import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
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

export const { toggleSidebarMenu } = layoutSlice.actions;

export const selectOpen = state => state.layout.open;

export default layoutSlice.reducer;