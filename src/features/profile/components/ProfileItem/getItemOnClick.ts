import { store } from 'app/store';
import { setActiveProfile } from '../../profileSlice';

export const getItemOnClick = (profileId?: number) => (): void => {
  store.dispatch(setActiveProfile(profileId));
};
