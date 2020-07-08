import { PayloadAction } from '@reduxjs/toolkit';
import { ProfileState, Profile } from '../profileSlice';
import { WithOptional, WithRequired } from 'utils/types';

type ProfileTemplateFields = 'showToDoList' | 'profileType';

type PartialProfile = WithOptional<
  Omit<Profile, 'profileId'>,
  ProfileTemplateFields
>;

type EmptyProfile = WithRequired<Profile, ProfileTemplateFields>;

const emptyProfile: EmptyProfile = {
  profileType: 'guest',
  showToDoList: false,
};

export const createProfileReducer = (
  state: ProfileState,
  action: PayloadAction<PartialProfile>,
): void => {
  state.profileList.push({
    ...emptyProfile, // start with the empty profile template
    ...action.payload, // layer on top the specific profile properties that were set
    profileId: state.maxProfileId++,
  });
};
