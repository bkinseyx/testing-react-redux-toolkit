import { store } from 'app/store';
import { createProfile } from '../../profileSlice';

export const getCreateOnClick = () => (): void => {
  store.dispatch(createProfile());
};
