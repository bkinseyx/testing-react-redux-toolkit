import React from 'react';
import styles from './ToDoItem.module.css';

import { ToDo } from '../../toDoSlice';
import { CustomTextInput } from 'app/components/CustomTextInput/CustomTextInput';
import { emptyToDo } from '../../helpers/toDoTemplate';
import { getDescriptionOnChange } from './getDescriptionOnChange';
import { getDeleteOnClick } from './getDeleteOnClick';
import { getIsCompleteOnChange } from './getIsCompleteOnChange';
import { CustomCheckbox } from 'app/components/CustomCheckbox/CustomCheckbox';

interface ToDoProps {
  toDo: ToDo;
}

export const ToDoItem: React.FC<ToDoProps> = ({ toDo = emptyToDo }) => {
  return (
    <li className={'list-group-item ' + styles.toDoItem}>
      <CustomCheckbox
        idPrefix={`isComplete-${toDo.toDoId}`}
        label={'Complete?'}
        checked={toDo.isComplete}
        onChange={getIsCompleteOnChange(toDo.toDoId)}
      />
      <CustomTextInput
        idPrefix={`description-${toDo.toDoId}`}
        label={'Description'}
        value={toDo.description}
        onChange={getDescriptionOnChange(toDo.toDoId)}
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
