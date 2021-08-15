import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CLIENTS } from '../../../global/api-endpoint';
import CustomStore from 'devextreme/data/custom_store';

export const getClientsData = createAsyncThunk(
  'MasterClients/GET',
  async (thunkAPI) => {
    try {
      const response = await axios.get(CLIENTS.GETALL,{headers: { Accept: 'application/json', 'Content-Type': 'application/json' }});
      const { data } = response;
      console.log(response)
      if (data.status) {
       
        return data;
      } 
      
      return thunkAPI.rejectWithValue(data);
      
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const masterClientsSlices = createSlice({
  name: 'MasterClients',
  initialState: {
    masterClientsData: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    [getClientsData.fulfilled]: (state, { payload }) => {
      state.masterClientsData = payload;
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
      return state;
    },
    [getClientsData.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.isSuccess = false;
    },
    [getClientsData.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = masterClientsSlices.actions;

export const masterClientsSelector = (state) => state.MasterClients;

export default masterClientsSlices.reducer