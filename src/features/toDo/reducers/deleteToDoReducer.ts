import { PayloadAction } from '@reduxjs/toolkit';

import { ToDoState } from '../toDoSlice';

export const deleteToDoReducer = (
  state: ToDoState,
  action: PayloadAction<number>,
): void => {
  const index = state.toDoList.findIndex(
    (toDo) => toDo.toDoId === action.payload,
  );
  state.toDoList.splice(index, 1);
};
