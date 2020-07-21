import { store } from 'app/store';
import { setErrorMessage } from '../toDoSlice';

test('deleteToDo test', () => {
  let state = store.getState().toDo;
  expect(state.errorMessage).toBeUndefined();

  store.dispatch(setErrorMessage('this is the error message'));
  state = store.getState().toDo;
  expect(state.errorMessage).toBe('this is the error message');

  store.dispatch(setErrorMessage());
  state = store.getState().toDo;
  expect(state.errorMessage).toBeUndefined();
});
