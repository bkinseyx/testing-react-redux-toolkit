import { createSlice } from '@reduxjs/toolkit';

import { createToDoReducer } from './reducers/createToDoReducer';
import { deleteToDoReducer } from './reducers/deleteToDoReducer';
import { updateToDoReducer } from './reducers/updateToDoReducer';
import { resetReducer } from './reducers/resetReducer';
import { setErrorMessageReducer } from './reducers/setErrorMessageReducer';

export interface ToDo {
  toDoId: number;
  description?: string;
  profileId: number;
  isComplete: boolean;
}

export interface ToDoState {
  toDoList: ToDo[];
  maxToDoId: number;
  errorMessage?: string;
}

export const initialState: ToDoState = {
  toDoList: [
    { toDoId: 1, profileId: 1, description: 'eat tacos', isComplete: true },
    { toDoId: 2, profileId: 1, description: 'drink milk', isComplete: false },
    {
      toDoId: 3,
      profileId: 1,
      description: 'walk and chew gum',
      isComplete: false,
    },
  ],
  maxToDoId: 3,
};

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    createToDo: createToDoReducer,
    deleteToDo: deleteToDoReducer,
    updateToDo: updateToDoReducer,
    setErrorMessage: setErrorMessageReducer,
    reset: resetReducer,
  },
});

export const {
  createToDo,
  deleteToDo,
  updateToDo,
  setErrorMessage,
  reset,
} = toDoSlice.actions;

export default toDoSlice.reducer;
