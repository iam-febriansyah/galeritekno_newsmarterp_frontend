// import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import layoutSlice from './layoutSlice';
import userSlice from './userSlice';
import masterSlice from './masterSlice';

const createRootReducer = (history) => combineReducers({
  layout: layoutSlice,
  users: userSlice,
  master: masterSlice,
  router: connectRouter(history),
})

export default createRootReducer