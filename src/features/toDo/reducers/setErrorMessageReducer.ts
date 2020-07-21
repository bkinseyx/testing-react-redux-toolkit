import { PayloadAction } from '@reduxjs/toolkit';
import { ToDoState } from '../toDoSlice';

export const setErrorMessageReducer = (
  state: ToDoState,
  action: PayloadAction<string | undefined>,
): void => {
  state.errorMessage = action.payload;
};
