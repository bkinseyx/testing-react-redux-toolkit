import { PayloadAction } from '@reduxjs/toolkit';

import { ProfileState, Profile } from '../profileSlice';
import { WithRequired } from 'utils/types';

export const updateProfileReducer = (
  state: ProfileState,
  action: PayloadAction<WithRequired<Profile, 'profileId'>>,
): void => {
  const profile = state.profileList.find(
    (existingProfile) => existingProfile.profileId === action.payload.profileId,
  );
  /* istanbul ignore next */
  if (!profile) {
    return;
  }
  Object.assign(profile, action.payload);
};
