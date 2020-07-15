import { store } from 'app/store';
import { hideErrorMessage } from '../../toDoSlice';

export const getErrorCloseOnClick = () => (): void => {
  store.dispatch(hideErrorMessage());
};
