import { store } from 'app/store';
import { updateToDo } from '../toDoSlice';

test('updateToDo test', () => {
  // this will set a breakpoint when you debug this test in your browser
  debugger;
  let state = store.getState().toDo;
  const originalToDo = state.toDoList.find((p) => p.toDoId === 1);
  expect(originalToDo?.isComplete).toBeTruthy();
  expect(originalToDo?.description).toBe('eat tacos');

  store.dispatch(updateToDo({ toDoId: 1, isComplete: false }));
  state = store.getState().toDo;
  let changedToDo = state.toDoList.find((p) => p.toDoId === 1);
  expect(changedToDo?.isComplete).toBeFalsy();

  store.dispatch(updateToDo({ toDoId: 1, description: 'be merry' }));
  state = store.getState().toDo;
  changedToDo = state.toDoList.find((p) => p.toDoId === 1);
  expect(changedToDo?.description).toBe('be merry');

  store.dispatch(
    updateToDo({ toDoId: 1, description: 'eat tacos', isComplete: true }),
  );
  state = store.getState().toDo;
  const backToOriginalToDo = state.toDoList.find((p) => p.toDoId === 1);

  // snapshots can be objects
  expect(backToOriginalToDo).toMatchInlineSnapshot(`
    Object {
      "description": "eat tacos",
      "isComplete": true,
      "profileId": 1,
      "toDoId": 1,
    }
  `);

  // deep object equality
  expect(backToOriginalToDo).toEqual(originalToDo);
});
