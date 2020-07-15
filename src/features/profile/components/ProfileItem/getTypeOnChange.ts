import { store } from 'app/store';
import { updateProfile, ProfileType } from '../../profileSlice';

export const getTypeOnChange = (profileId?: number) => (
  value: string,
): void => {
  if (!profileId) {
    return;
  }
  store.dispatch(
    updateProfile({
      profileId,
      profileType: value as ProfileType,
    }),
  );
};
