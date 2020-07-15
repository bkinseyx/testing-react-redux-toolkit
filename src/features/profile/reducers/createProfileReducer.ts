import { ProfileState } from '../profileSlice';
import { emptyProfile } from '../helpers/profileTemplate';

export const createProfileReducer = (state: ProfileState): void => {
  const profileId = ++state.maxProfileId;
  state.profileList.push({
    ...emptyProfile,
    profileId,
  });
  state.activeProfileId = profileId;
};
