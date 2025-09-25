import { combineReducers, configureStore } from '@reduxjs/toolkit';
import apiInstance from './createApiInstance';
import appReducer from './app';
import i18nReducer from './i18n';

const rootReducer = combineReducers({
  app: appReducer,
  i18n: i18nReducer,
  [apiInstance.reducerPath]: apiInstance.reducer,
});

const reducer = (state, action) => {
  if (action.type === 'logout') {
    state = undefined;
  }
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiInstance.middleware
    ),
  devTools: process.env.NODE_ENV !== 'production',
});
