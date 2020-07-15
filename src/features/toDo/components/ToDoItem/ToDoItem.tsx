import React from 'react';
import styles from './ToDoItem.module.css';

import { ToDo } from '../../toDoSlice';
import { CustomTextInput } from 'app/components/CustomInput';
import { emptyToDo } from '../../helpers/toDoTemplate';
import { getDescriptionOnChange } from './getDescriptionOnChange';
import { getDeleteOnClick } from './getDeleteOnClick';

interface ToDoProps {
  toDo: ToDo;
}

export const ToDoItem: React.FC<ToDoProps> = ({ toDo = emptyToDo }) => {
  return (
    <li className={'list-group-item ' + styles.toDoItem}>
      <CustomTextInput
        idPrefix={`description-${toDo.toDoId}`}
        label={'Description'}
        value={toDo.description}
        onChange={getDescriptionOnChange(toDo)}
      />
      <div className={styles.buttonWrapper}>
        <button
          className="btn btn-danger"
          onClick={getDeleteOnClick(toDo.toDoId)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
