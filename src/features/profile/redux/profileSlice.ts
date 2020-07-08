import { createSlice } from '@reduxjs/toolkit';

import { createProfileReducer } from './reducers/createProfileReducer';
import { deleteProfileReducer } from './reducers/deleteProfileReducer';
import { updateProfileReducer } from './reducers/updateProfileReducer';
import { resetReducer } from './reducers/resetReducer';

const profileTypes = ['guest', 'user', 'admin'] as const; // TS 3.4
export type ProfileType = typeof profileTypes[number]; // union type

export interface Profile {
  profileId: number;
  name: string;
  profileType: ProfileType;
  showToDoList: boolean;
}

export interface ProfileState {
  profileList: Profile[];
  maxProfileId: 1;
  profileTypes: ReadonlyArray<ProfileType>;
}

export const initialState: ProfileState = {
  profileList: [
    { profileId: 1, name: 'Ben', profileType: 'admin', showToDoList: true },
  ],
  maxProfileId: 1,
  profileTypes: profileTypes as ReadonlyArray<ProfileType>,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    createProfile: createProfileReducer,
    deleteProfile: deleteProfileReducer,
    updateProfile: updateProfileReducer,
    reset: resetReducer,
  },
});

export const {
  createProfile,
  deleteProfile,
  updateProfile,
  reset,
} = profileSlice.actions;

export default profileSlice.reducer;
