import { PayloadAction } from '@reduxjs/toolkit';
import { ToDoState } from '../toDoSlice';

export const hideErrorMessageReducer = (
  state: ToDoState,
  _action: PayloadAction,
): void => {
  state.errorMessage = undefined;
};
