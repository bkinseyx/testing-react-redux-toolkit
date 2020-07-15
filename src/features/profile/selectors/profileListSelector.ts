import { RootState } from 'app/rootReducer';
import { Profile } from '../profileSlice';

export const profileListSelector = (state: RootState): Profile[] =>
  state.profile.profileList;
