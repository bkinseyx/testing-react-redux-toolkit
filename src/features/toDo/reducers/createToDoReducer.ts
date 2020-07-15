import { PayloadAction } from '@reduxjs/toolkit';
import { ToDoState } from '../toDoSlice';
import { emptyToDo } from '../helpers/toDoTemplate';

export const createToDoReducer = (
  state: ToDoState,
  action: PayloadAction<number>,
): void => {
  const toDoId = ++state.maxToDoId;
  state.toDoList.push({
    ...emptyToDo,
    profileId: action.payload,
    toDoId,
  });
};
