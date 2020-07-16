/* eslint-disable max-lines-per-function */
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
import { ProfileCard } from './ProfileCard';
import { reset } from '../../profileSlice';

const renderCard = (): RenderResult =>
  render(
    <Provider store={store}>
      <ProfileCard />
    </Provider>,
  );

test('renders the Profile Card', () => {
  const { asFragment } = renderCard();
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByLabelText(/profile card/i)).toBeInTheDocument();
  const profileList = screen.getByRole('list');
  expect(profileList).toBeInTheDocument();
  const profileListItems = within(profileList).getAllByRole('listitem');
  expect(profileListItems).toHaveLength(2);
});

test('test delete button', () => {
  const { rerender, asFragment } = renderCard();
  const profileList = screen.getByRole('list');
  let profileListItems = within(profileList).getAllByRole('listitem');
  const deleteButton = within(profileListItems[0]).getByText(/delete/i);
  fireEvent.click(deleteButton);
  rerender(
    <Provider store={store}>
      <ProfileCard />
    </Provider>,
  );
  profileListItems = within(profileList).getAllByRole('listitem');
  expect(profileListItems).toHaveLength(1);
  expect(asFragment()).toMatchSnapshot();
});

test('test create button', () => {
  store.dispatch(reset());
  const { rerender, asFragment } = renderCard();
  const createButton = screen.getByText(/create/i);
  const profileList = screen.getByRole('list');
  let profileListItems = within(profileList).getAllByRole('listitem');
  expect(profileListItems).toHaveLength(2);
  fireEvent.click(createButton);
  rerender(
    <Provider store={store}>
      <ProfileCard />
    </Provider>,
  );
  profileListItems = within(profileList).getAllByRole('listitem');
  expect(profileListItems).toHaveLength(3);
  expect(asFragment()).toMatchSnapshot();
  const lastItem = profileListItems[2];
  expect(within(lastItem).getByLabelText('Name')).toHaveValue('');
  expect(within(lastItem).getByLabelText('Type')).toHaveValue('guest');
});
