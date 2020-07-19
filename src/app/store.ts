import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', async () => {
    const newRootReducer = (await import('./rootReducer')).default;
    store.replaceReducer(newRootReducer);
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
