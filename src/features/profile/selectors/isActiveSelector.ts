import { RootState } from 'app/rootReducer';
import { Profile } from '../profileSlice';
import { WithRequired } from 'utils/types';
import { ProfileTemplateFields } from '../helpers/profileTemplate';

export const getIsActiveSelector = (
  profile: WithRequired<Profile, ProfileTemplateFields>,
) => (state: RootState): boolean =>
  state.profile.activeProfileId === profile.profileId;
