import { WithRequired } from 'utils/types';
import { ToDo, updateToDo } from '../../toDoSlice';
import { store } from 'app/store';

export const getDescriptionOnChange = (
  toDo: WithRequired<ToDo, 'isComplete'>,
) => (description: string): void => {
  if (!toDo.toDoId) {
    return;
  }
  store.dispatch(
    updateToDo({
      toDoId: toDo.toDoId,
      description,
    }),
  );
};
