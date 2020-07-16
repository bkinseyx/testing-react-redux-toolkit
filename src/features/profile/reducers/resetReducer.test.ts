import { store } from 'app/store';
import { deleteProfile, reset, initialState } from '../profileSlice';

test('reset test', () => {
  const unchangedState = store.getState().profile;
  store.dispatch(deleteProfile(1));
  store.dispatch(deleteProfile(2));
  const changedState = store.getState().profile;
  expect(changedState).not.toEqual(unchangedState);
  store.dispatch(reset());
  const resetState = store.getState().profile;
  expect(resetState).toEqual(unchangedState);
  expect(resetState).toEqual(initialState);
  expect(resetState).toMatchInlineSnapshot(`
    Object {
      "maxProfileId": 2,
      "profileList": Array [
        Object {
          "name": "Ben",
          "profileId": 1,
          "profileType": "admin",
          "showToDoList": true,
        },
        Object {
          "name": "Sue",
          "profileId": 2,
          "profileType": "user",
          "showToDoList": false,
        },
      ],
      "profileTypes": Array [
        "guest",
        "user",
        "admin",
      ],
    }
  `);
});
