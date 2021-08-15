// import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router'
import layoutSlice from './layoutSlice'
import userSlice from './userSlice'

const createRootReducer = (history) => combineReducers({
  layout: layoutSlice,
  users: userSlice,
  router: connectRouter(history),
})

export default createRootReducer