import { store } from 'app/store';
import { deleteProfile, setActiveProfile } from '../profileSlice';

test('deleteProfile test', () => {
  let state = store.getState().profile;
  expect(state.profileList).toHaveLength(2);

  store.dispatch(deleteProfile(1));
  state = store.getState().profile;
  expect(state.profileList).toHaveLength(1);
  expect(state.activeProfileId).toBeUndefined();

  store.dispatch(setActiveProfile(2));
  state = store.getState().profile;
  expect(state.activeProfileId).toBe(2);

  store.dispatch(deleteProfile(2));
  state = store.getState().profile;
  expect(state.activeProfileId).toBeUndefined();
});
