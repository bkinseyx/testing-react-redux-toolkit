import { RootState } from 'app/rootReducer';

export const errorMessageSelector = (state: RootState): string | undefined =>
  state.toDo.errorMessage;
