import React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { ToDoItem } from './ToDoItem';
import { ToDo, reset } from 'features/toDo/toDoSlice';

const renderItem = (toDo: ToDo): RenderResult =>
  // the ToDoItem component is now "reduxified"
  render(
    <Provider store={store}>
      <ToDoItem toDo={toDo} />
    </Provider>,
  );

const getToDo = (toDoId: number): ToDo => {
  const toDo = store.getState().toDo.toDoList.find((p) => p.toDoId === toDoId);
  expect(toDo).not.toBeUndefined();
  // typescript doesn't understand that ToDo must be defined here, so we explicitly cast
  return toDo as ToDo;
};

test('renders ToDoItem', () => {
  const toDo = getToDo(1);
  const { asFragment } = renderItem(toDo);
  expect(asFragment()).toMatchSnapshot();
});

test('ToDoItem description field', () => {
  let toDo = getToDo(1);
  const { asFragment, rerender } = renderItem(toDo);
  let textInput = screen.getByLabelText('Description');
  expect(textInput).toHaveValue('eat tacos');
  fireEvent.change(textInput, { target: { value: 'live, laugh, love' } });

  textInput = screen.getByLabelText('Description');
  toDo = getToDo(1);
  expect(toDo).toMatchInlineSnapshot(`
    Object {
      "description": "live, laugh, love",
      "isComplete": true,
      "profileId": 1,
      "toDoId": 1,
    }
  `);

  // it is necessary to reduxify the component when you rerender also
  rerender(
    <Provider store={store}>
      <ToDoItem toDo={toDo} />
    </Provider>,
  );
  expect(textInput).toHaveValue('live, laugh, love');
  expect(asFragment()).toMatchSnapshot();
});

test('ToDoItem isComplete field', () => {
  // Whenever you do multiple redux tests in the same file, it's best practice to reset the state.
  // Otherwise the state from a previous test could bleed into a new one and cause unexpected issues.
  store.dispatch(reset());
  let toDo = getToDo(1);
  const { asFragment, rerender } = renderItem(toDo);

  // It's best practice to get an element the same way a real user would get an element.
  // In this case by the label text.
  const isCompleteCheckbox = screen.getByLabelText(/complete/i);
  expect(isCompleteCheckbox).toBeChecked();

  // this is how we check/uncheck a checkbox
  fireEvent.click(isCompleteCheckbox);
  toDo = getToDo(1);
  expect(toDo).toMatchInlineSnapshot(`
    Object {
      "description": "eat tacos",
      "isComplete": false,
      "profileId": 1,
      "toDoId": 1,
    }
  `);

  // it is necessary to reduxify the component when you rerender also
  rerender(
    <Provider store={store}>
      <ToDoItem toDo={toDo} />
    </Provider>,
  );
  expect(isCompleteCheckbox).not.toBeChecked();
  expect(asFragment()).toMatchSnapshot();
});
