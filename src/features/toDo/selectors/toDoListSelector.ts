import { RootState } from 'app/rootReducer';
import { ToDo } from '../toDoSlice';

export const toDoListSelector = (state: RootState): ToDo[] =>
  state.toDo.toDoList.filter(
    (toDo) => toDo.profileId === state.profile.activeProfileId,
  );
