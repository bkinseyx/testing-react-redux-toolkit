import { PayloadAction } from '@reduxjs/toolkit';

import { ProfileState } from '../profileSlice';

export const deleteProfileReducer = (
  state: ProfileState,
  action: PayloadAction<number>,
): void => {
  const index = state.profileList.findIndex(
    (profile) => profile.profileId === action.payload,
  );
  state.profileList.splice(index, 1);
  if (state.activeProfileId === action.payload) {
    state.activeProfileId = undefined;
  }
};
