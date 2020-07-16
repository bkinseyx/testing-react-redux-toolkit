import { store } from 'app/store';
import { createProfile } from '../profileSlice';
import { emptyProfile } from '../helpers/profileTemplate';

test('createProfile test', () => {
  let state = store.getState().profile;
  expect(state.profileList).toHaveLength(2);
  expect(state.maxProfileId).toBe(2);

  store.dispatch(createProfile());
  state = store.getState().profile;
  expect(state.profileList).toHaveLength(3);
  expect(state.maxProfileId).toBe(3);
  const newProfile = state.profileList[2];
  expect(newProfile).toMatchInlineSnapshot(
    newProfile,
    `
    Object {
      "profileId": 3,
      "profileType": "guest",
      "showToDoList": false,
    }
  `,
  );
  expect(newProfile).toEqual({
    ...emptyProfile,
    profileId: 3,
  });
});
