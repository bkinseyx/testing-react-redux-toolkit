import { store } from 'app/store';
import { updateProfile } from '../../profileSlice';

export const getNameOnChange = (profileId?: number) => (name: string): void => {
  console.log('here 1', profileId);
  if (!profileId) {
    return;
  }
  console.log('here 2', name);
  store.dispatch(
    updateProfile({
      profileId,
      name,
    }),
  );
};
