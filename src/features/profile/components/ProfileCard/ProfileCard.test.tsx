import React from 'react';
import { render, screen, within, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { ProfileCard } from './ProfileCard';

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
