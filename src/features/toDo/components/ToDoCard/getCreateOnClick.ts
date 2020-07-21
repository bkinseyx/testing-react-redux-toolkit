import { store } from 'app/store';
import { createToDo, setErrorMessage } from '../../toDoSlice';

export const getCreateOnClick = (profileId?: number) => (): void => {
  if (!profileId) {
    store.dispatch(setErrorMessage('Must select a profile first.'));
    return;
  }
  store.dispatch(createToDo(profileId));
};
