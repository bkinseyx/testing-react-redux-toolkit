import { updateToDo } from '../../toDoSlice';
import { store } from 'app/store';

export const getIsCompleteOnChange = (toDoId?: number) => (
  isComplete: boolean,
): void => {
  if (!toDoId) {
    return;
  }
  store.dispatch(
    updateToDo({
      toDoId,
      isComplete,
    }),
  );
};
