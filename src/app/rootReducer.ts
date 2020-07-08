import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/redux/profileSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
