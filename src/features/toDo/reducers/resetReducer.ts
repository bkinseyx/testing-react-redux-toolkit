import { PayloadAction } from '@reduxjs/toolkit';

import { ToDoState, initialState } from '../toDoSlice';

export const resetReducer = (
  _state: ToDoState,
  _action: PayloadAction,
): ToDoState => initialState;
