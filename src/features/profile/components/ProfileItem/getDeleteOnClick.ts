import React from 'react';
import { store } from 'app/store';
import { deleteProfile } from '../../profileSlice';

export const getDeleteOnClick = (profileId?: number) => (
  event: React.MouseEvent,
): void => {
  /* istanbul ignore next */
  if (!profileId) {
    return;
  }
  store.dispatch(deleteProfile(profileId));
  event.stopPropagation();
};
