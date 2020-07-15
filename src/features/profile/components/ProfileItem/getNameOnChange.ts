import { store } from 'app/store';
import { updateProfile } from '../../profileSlice';

export const getNameOnChange = (profileId?: number) => (name: string): void => {
  if (!profileId) {
    return;
  }
  store.dispatch(
    updateProfile({
      profileId,
      name,
    }),
  );
};
