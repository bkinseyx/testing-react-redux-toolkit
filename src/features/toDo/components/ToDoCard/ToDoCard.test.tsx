import React from 'react';
import {
  render,
  screen,
  within,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { ToDoCard } from './ToDoCard';
import { reset } from '../../toDoSlice';
import { setActiveProfile } from 'features/profile/profileSlice';

const renderCard = (): RenderResult =>
  render(
    <Provider store={store}>
      <ToDoCard />
    </Provider>,
  );

test('renders the ToDoCard', () => {
  const { asFragment } = renderCard();
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByLabelText(/toDo card/i)).toBeInTheDocument();
  const toDoList = screen.getByRole('list');
  expect(toDoList).toBeInTheDocument();

  // we have to use queryAll* instead of getAllBy* in order to test non-existence.
  // see https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing
  const toDoListItems = within(toDoList).queryAllByRole('listitem');
  expect(toDoListItems).toHaveLength(0);
});

test('test delete button', () => {
  store.dispatch(setActiveProfile(1));
  const { rerender, asFragment } = renderCard();
  const toDoList = screen.getByRole('list');
  let toDoListItems = within(toDoList).getAllByRole('listitem');
  const deleteButton = within(toDoListItems[0]).getByText(/delete/i);
  fireEvent.click(deleteButton);
  rerender(
    <Provider store={store}>
      <ToDoCard />
    </Provider>,
  );
  toDoListItems = within(toDoList).getAllByRole('listitem');
  expect(toDoListItems).toHaveLength(2);
  expect(asFragment()).toMatchSnapshot();
});

test('test create button', () => {
  store.dispatch(reset());
  store.dispatch(setActiveProfile(1));
  const { rerender, asFragment } = renderCard();
  const createButton = screen.getByText(/create/i);
  const toDoList = screen.getByRole('list');
  let toDoListItems = within(toDoList).getAllByRole('listitem');
  expect(toDoListItems).toHaveLength(3);
  fireEvent.click(createButton);
  rerender(
    <Provider store={store}>
      <ToDoCard />
    </Provider>,
  );
  toDoListItems = within(toDoList).getAllByRole('listitem');
  expect(toDoListItems).toHaveLength(4);
  expect(asFragment()).toMatchSnapshot();
  const lastItem = toDoListItems[3];
  expect(within(lastItem).getByLabelText(/complete/i)).not.toBeChecked();
  expect(within(lastItem).getByLabelText(/description/i)).toHaveValue('');
});
