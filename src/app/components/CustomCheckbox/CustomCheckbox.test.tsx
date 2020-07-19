import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { CustomCheckbox } from './CustomCheckbox';

const changeHandler = jest.fn();

test('renders the checkbox', () => {
  const { rerender, asFragment } = render(
    <CustomCheckbox
      onChange={changeHandler}
      checked={false}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        <label
          for="myTest-input"
        >
          My Label
        </label>
        <input
          class="form-control checkbox"
          id="myTest-input"
          type="checkbox"
        />
      </div>
    </DocumentFragment>
  `);
  const checkbox = screen.getByLabelText('My Label');
  fireEvent.click(checkbox);
  expect(changeHandler).toHaveBeenCalledWith(true);
  rerender(
    <CustomCheckbox
      onChange={changeHandler}
      checked={true}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );
  fireEvent.click(checkbox);
  expect(changeHandler).toHaveBeenCalledWith(false);
});
