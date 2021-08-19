import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH } from '../../global/api-endpoint';

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ UserName, UserPassword }, thunkAPI) => {
    try {
      const response = await axios.post(AUTH.SIGNIN, JSON.stringify({ UserName, UserPassword }),{headers: { Accept: 'application/json', 'Content-Type': 'application/json' }});
      
      const { data } = response;

      if (data.status) {
        localStorage.setItem('token', data.token);
        return data;
      } 
      
      return thunkAPI.rejectWithValue(data);
      
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// export const forgotPassword = createAsyncThunk(
//   'users/forgot',
//   async ({ UserName, EmailAddress }, thunkAPI) => {
//     try {
    
//       const response = await axios.post(AUTH.SIGNIN, JSON.stringify({ UserName, EmailAddress }),{headers: { Accept: 'application/json', 'Content-Type': 'application/json' }});

//       let data = await response.json();

//       console.log('response', data);

//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: '',
    roleData: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    Message: '',
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
    [loginUser.fulfilled]: (state, { payload }) => {
      state.userData = payload.user;
      state.roleData = payload.role; 
      state.isFetching = false;
      state.isSuccess = true;
      state.isError = false;
      state.Message = payload.message;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.isSuccess = false;
      state.Message = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer