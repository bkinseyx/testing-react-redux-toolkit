import { store } from 'app/store';
import { setActiveProfile } from '../profileSlice';

test('setActiveProfile test', () => {
  let state = store.getState().profile;
  expect(state.activeProfileId).toBeUndefined();

  store.dispatch(setActiveProfile(2));
  state = store.getState().profile;
  expect(state.activeProfileId).toBe(2);

  store.dispatch(setActiveProfile(1));
  state = store.getState().profile;
  expect(state.activeProfileId).toBe(1);
});
