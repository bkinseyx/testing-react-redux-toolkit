import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { CustomTextInput } from './CustomTextInput';

const changeHandler = jest.fn();

test('renders the text input', () => {
  const { rerender, asFragment } = render(
    <CustomTextInput
      onChange={changeHandler}
      value={'original value'}
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
          class="form-control"
          id="myTest-input"
          type="text"
          value="original value"
        />
      </div>
    </DocumentFragment>
  `);
  const textInput = screen.getByLabelText('My Label');
  expect(textInput).toHaveValue('original value');
  fireEvent.change(textInput, { target: { value: 'new value' } });
  expect(changeHandler).toHaveBeenCalledWith('new value');
  rerender(
    <CustomTextInput
      onChange={changeHandler}
      value={'new value'}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );
  expect(textInput).toHaveValue('new value');
});
