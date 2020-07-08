import { PayloadAction } from '@reduxjs/toolkit';

import { ProfileState, initialState } from '../profileSlice';

export const resetReducer = (
  _state: ProfileState,
  _action: PayloadAction,
): ProfileState => initialState;
