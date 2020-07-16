import { store } from 'app/store';
import { updateProfile } from '../profileSlice';

test('updateProfile test', () => {
  let state = store.getState().profile;
  expect(state.activeProfileId).toBeUndefined();
  let profile = state.profileList.find((p) => p.profileId === 1);
  expect(profile?.name).toBe('Ben');
  expect(profile?.profileType).toBe('admin');
  store.dispatch(updateProfile({ profileId: 1, name: 'John' }));
  state = store.getState().profile;
  profile = state.profileList.find((p) => p.profileId === 1);
  expect(profile?.name).toBe('John');
  store.dispatch(updateProfile({ profileId: 1, profileType: 'user' }));
  state = store.getState().profile;
  profile = state.profileList.find((p) => p.profileId === 1);
  expect(profile?.profileType).toBe('user');
  expect(profile).toMatchInlineSnapshot(`
    Object {
      "name": "John",
      "profileId": 1,
      "profileType": "user",
      "showToDoList": true,
    }
  `);
});
