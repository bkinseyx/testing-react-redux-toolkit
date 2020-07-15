import { RootState } from 'app/rootReducer';
import { Profile } from 'features/profile/profileSlice';

export const activeProfileSelector = (state: RootState): Profile | undefined =>
  state.profile.profileList.find(
    (profile) => profile.profileId === state.profile.activeProfileId,
  );
