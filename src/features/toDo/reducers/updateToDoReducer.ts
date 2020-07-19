import { PayloadAction } from '@reduxjs/toolkit';

import { ToDoState, ToDo } from '../toDoSlice';
import { WithRequired } from 'utils/types';

export const updateToDoReducer = (
  state: ToDoState,
  action: PayloadAction<WithRequired<ToDo, 'toDoId'>>,
): void => {
  const toDo = state.toDoList.find(
    (existingToDo) => existingToDo.toDoId === action.payload.toDoId,
  );
  /* istanbul ignore next */
  if (!toDo) {
    return;
  }
  Object.assign(toDo, action.payload);
};
