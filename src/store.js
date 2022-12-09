import {configureStore} from '@reduxjs/toolkit';
import auth from './slices/auth.slice';

const reducer = {auth};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
