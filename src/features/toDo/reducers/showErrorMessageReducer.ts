import { PayloadAction } from '@reduxjs/toolkit';
import { ToDoState } from '../toDoSlice';

export const showErrorMessageReducer = (
  state: ToDoState,
  action: PayloadAction<string>,
): void => {
  state.errorMessage = action.payload;
};
