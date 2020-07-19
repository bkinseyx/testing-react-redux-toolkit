import React from 'react';
import {
  render,
  screen,
  within,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import App from './App';

const renderApp = (): RenderResult =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

test('renders the app', () => {
  const { asFragment } = renderApp();
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByLabelText(/profile card/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/todo card/i)).toBeInTheDocument();
});

test('handles profile click', () => {
  const { asFragment } = renderApp();
  const profileCard = screen.getByLabelText(/profile card/i);
  const profileList = within(profileCard).getByRole('list');
  const profileListItems = within(profileList).getAllByRole('listitem');

  const toDoCard = screen.getByLabelText(/todo card/i);
  const toDoList = within(toDoCard).getByRole('list');
  let toDoListItems = within(toDoList).queryAllByRole('listitem');
  expect(toDoListItems).toHaveLength(0);

  fireEvent.click(profileListItems[0]);
  toDoListItems = within(toDoList).queryAllByRole('listitem');
  expect(toDoListItems).toHaveLength(3);
  expect(asFragment()).toMatchSnapshot();
});

test('handles profile delete click', () => {
  const { asFragment } = renderApp();
  const profileCard = screen.getByLabelText(/profile card/i);
  const profileList = within(profileCard).getByRole('list');
  const profileListItems = within(profileList).getAllByRole('listitem');
  fireEvent.click(profileListItems[0]);

  // here we want to use getBy* instead of queryBy* because we expect the element to exist
  // if it doesn't, test will fail instead of exception thrown, which is what we want.
  const profileDeleteButton = within(profileListItems[0]).getByText(/delete/i);

  fireEvent.click(profileDeleteButton);
  const toDoCard = screen.getByLabelText(/todo card/i);
  const toDoList = within(toDoCard).getByRole('list');
  const toDoListItems = within(toDoList).queryAllByRole('listitem');
  expect(toDoListItems).toHaveLength(0);
  expect(asFragment()).toMatchSnapshot();
});

test('handles create new todo click', () => {
  const { rerender } = renderApp();
  let alert = screen.queryByRole(/alert/i);
  expect(alert).not.toBeInTheDocument();
  const createNewToDoButton = screen.getByText(/create new todo/i);
  fireEvent.click(createNewToDoButton);
  rerender(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  alert = screen.getByRole(/alert/i);
  expect(alert).toBeInTheDocument();
  const alertCloseButton = within(alert).getByRole('button');
  fireEvent.click(alertCloseButton);
  rerender(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(alert).not.toBeInTheDocument();
});
