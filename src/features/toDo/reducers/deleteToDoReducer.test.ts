import { store } from 'app/store';
import { deleteToDo } from '../toDoSlice';

test('deleteToDo test', () => {
  let state = store.getState().toDo;
  expect(state.toDoList).toHaveLength(3);

  store.dispatch(deleteToDo(1));
  state = store.getState().toDo;
  expect(state.toDoList).toHaveLength(2);

  store.dispatch(deleteToDo(2));
  state = store.getState().toDo;
  expect(state.toDoList).toHaveLength(1);
});
