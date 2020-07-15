import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from '../features/profile/profileSlice';
import toDoReducer from '../features/toDo/toDoSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  toDo: toDoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
