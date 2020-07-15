import { RootState } from 'app/rootReducer';

export const profileTypesSelector = (state: RootState): string[] =>
  state.profile.profileTypes as string[];
