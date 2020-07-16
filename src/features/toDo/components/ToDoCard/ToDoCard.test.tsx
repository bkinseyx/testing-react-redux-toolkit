import React from 'react';
import { render, screen, within, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { ToDoCard } from './ToDoCard';

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
