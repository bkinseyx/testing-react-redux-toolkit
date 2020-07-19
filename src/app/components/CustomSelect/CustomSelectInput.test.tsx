import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { CustomSelect } from './CustomSelect';

const changeHandler = jest.fn();

const options = ['option 1', 'option 2'];

test('renders the text input', () => {
  const { rerender, asFragment } = render(
    <CustomSelect
      onChange={changeHandler}
      value={'option 2'}
      options={options}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        <label
          for="myTest-select"
        >
          My Label
        </label>
        <select
          class="form-control"
          id="myTest-select"
        >
          <option>
            option 1
          </option>
          <option>
            option 2
          </option>
        </select>
      </div>
    </DocumentFragment>
  `);
  const textInput = screen.getByLabelText('My Label');
  expect(textInput).toHaveValue('option 2');
  fireEvent.change(textInput, { target: { value: 'option 1' } });
  expect(changeHandler).toHaveBeenCalledWith('option 1');
  rerender(
    <CustomSelect
      onChange={changeHandler}
      options={options}
      value={'option 1'}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );
  expect(textInput).toHaveValue('option 1');
});
