import { store } from 'app/store';
import { updateProfile, ProfileType } from '../../profileSlice';

export const getTypeOnChange = (profileId?: number) => (
  value: string,
): void => {
  /* istanbul ignore next */
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
