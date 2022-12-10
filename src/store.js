import {configureStore} from '@reduxjs/toolkit';
import auth from './slices/auth.slice';
import award from './slices/award.slice';

const reducer = {auth, award};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
