import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import classNames from 'classnames';

import { CardFooterWrapper } from 'app/components/CardFooterWrapper/CardFooterWrapper';
import { getCreateOnClick } from './getCreateOnClick';
import { getErrorCloseOnClick } from './getErrorCloseOnClick';
import { activeProfileSelector } from '../../selectors/activeProfileSelector';
import { errorMessageSelector } from 'features/toDo/selectors/errorMessageSelector';

export const ToDoCardFooter: React.FC = () => {
  const activeProfile = useSelector(activeProfileSelector);
  const errorMessage = useSelector(errorMessageSelector);
  return (
    <div className="card-footer">
      <CardFooterWrapper>
        <button
          className={classNames('btn', 'btn-primary', {
            disabled: !activeProfile?.profileId,
          })}
          onClick={getCreateOnClick(activeProfile?.profileId)}
        >
          Create New ToDo
        </button>
        {errorMessage && (
          <Alert variant="warning" dismissible onClose={getErrorCloseOnClick()}>
            {errorMessage}
          </Alert>
        )}
      </CardFooterWrapper>
    </div>
  );
};
