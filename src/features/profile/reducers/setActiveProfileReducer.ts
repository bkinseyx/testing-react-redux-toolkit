import { PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../profileSlice';

export const setActiveProfileReducer = (
  state: ProfileState,
  action: PayloadAction<number | undefined>,
): void => {
  state.activeProfileId = action.payload;
};
