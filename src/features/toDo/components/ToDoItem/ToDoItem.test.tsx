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
import { ToDo } from 'features/toDo/toDoSlice';

const renderItem = (toDo: ToDo): RenderResult =>
  render(
    <Provider store={store}>
      <ToDoItem toDo={toDo} />
    </Provider>,
  );

test('renders ToDoItem', () => {
  const toDo = store.getState().toDo.toDoList[0];
  const { asFragment } = renderItem(toDo);
  expect(asFragment()).toMatchSnapshot();
});

test('ToDoItem description field', () => {
  let toDo = store.getState().toDo.toDoList[0];
  const { asFragment, rerender } = renderItem(toDo);
  let textInput = screen.getByLabelText('Description');
  expect(textInput).toHaveValue('eat tacos');
  fireEvent.change(textInput, { target: { value: 'live, laugh, love' } });

  textInput = screen.getByLabelText('Description');
  toDo = store.getState().toDo.toDoList[0];
  expect(toDo).toMatchInlineSnapshot(`
    Object {
      "description": "live, laugh, love",
      "isComplete": true,
      "profileId": 1,
      "toDoId": 1,
    }
  `);
  rerender(
    <Provider store={store}>
      <ToDoItem toDo={toDo} />
    </Provider>,
  );
  expect(textInput).toHaveValue('live, laugh, love');
  expect(asFragment()).toMatchSnapshot();
});

test('ToDoItem type field', () => {
  let toDo = store.getState().toDo.toDoList[0];
  const { asFragment, rerender } = renderItem(toDo);
  const isCompleteCheckbox = screen.getByLabelText(/complete/i);
  expect(isCompleteCheckbox).toBeChecked();
  fireEvent.click(isCompleteCheckbox);
  toDo = store.getState().toDo.toDoList[0];
  expect(toDo).toMatchInlineSnapshot(`
    Object {
      "description": "live, laugh, love",
      "isComplete": false,
      "profileId": 1,
      "toDoId": 1,
    }
  `);
  rerender(
    <Provider store={store}>
      <ToDoItem toDo={toDo} />
    </Provider>,
  );
  expect(isCompleteCheckbox).not.toBeChecked();
  expect(asFragment()).toMatchSnapshot();
});
