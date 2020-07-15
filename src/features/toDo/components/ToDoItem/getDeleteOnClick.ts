import { deleteToDo } from '../../toDoSlice';
import { store } from 'app/store';

export const getDeleteOnClick = (toDoId?: number) => (): void => {
  console.log({ toDoId });
  if (!toDoId) {
    return;
  }
  store.dispatch(deleteToDo(toDoId));
};
