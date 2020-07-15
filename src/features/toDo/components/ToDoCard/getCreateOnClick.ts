import { store } from 'app/store';
import { createToDo, showErrorMessage } from '../../toDoSlice';

export const getCreateOnClick = (profileId?: number) => (): void => {
  if (!profileId) {
    store.dispatch(showErrorMessage('Must select a profile first.'));
    return;
  }
  store.dispatch(createToDo(profileId));
};
