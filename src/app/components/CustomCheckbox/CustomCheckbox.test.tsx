import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// this is the component we are going to be testing
import { CustomCheckbox } from './CustomCheckbox';

// this is a event handler function that we will mock
const changeHandler = jest.fn();

test('render the checkbox and click on it', () => {
  const { rerender, asFragment } = render(
    <CustomCheckbox
      onChange={changeHandler}
      checked={false}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );
  // this is an inline snapshot.
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
  // React testing library encourages you to get elements the way a real user would--
  // In this case, by the label.
  const checkbox = screen.getByLabelText('My Label');

  // Our first event
  fireEvent.click(checkbox);
  expect(changeHandler).toHaveBeenCalledWith(true);

  // React testing library doesn't automatically rerender controlled form elements.
  // Instead we have to change the 'checked' prop and explicitly rerender.
  rerender(
    <CustomCheckbox
      onChange={changeHandler}
      checked={true}
      label={'My Label'}
      idPrefix={'myTest'}
    />,
  );

  // now when we click, the checkbox will be set to false
  fireEvent.click(checkbox);
  expect(changeHandler).toHaveBeenCalledWith(false);
});
