import { store } from 'app/store';
import { setErrorMessage } from '../../toDoSlice';

export const getErrorCloseOnClick = () => (): void => {
  store.dispatch(setErrorMessage());
};
