import { deleteToDo } from '../../toDoSlice';
import { store } from 'app/store';

export const getDeleteOnClick = (toDoId?: number) => (): void => {
  /* istanbul ignore next */
  if (!toDoId) {
    return;
  }
  store.dispatch(deleteToDo(toDoId));
};
