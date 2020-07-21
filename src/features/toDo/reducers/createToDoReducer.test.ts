import { store } from 'app/store';
import { createToDo } from '../toDoSlice';
import { emptyToDo } from '../helpers/toDoTemplate';

test('createToDo test', () => {
  let state = store.getState().toDo;
  expect(state.toDoList).toHaveLength(3);
  expect(state.maxToDoId).toBe(3);

  const profileId = 1;
  store.dispatch(createToDo(profileId));
  state = store.getState().toDo;
  expect(state.toDoList).toHaveLength(4);
  expect(state.maxToDoId).toBe(4);
  const newToDo = state.toDoList[3];
  expect(newToDo).toMatchInlineSnapshot(
    newToDo,
    `
    Object {
      "isComplete": false,
      "profileId": 1,
      "toDoId": 4,
    }
  `,
  );
  expect(newToDo).toEqual({
    ...emptyToDo,
    profileId: 1,
    toDoId: 4,
  });
});
