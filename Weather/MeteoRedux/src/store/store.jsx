import { configureStore } from '@reduxjs/toolkit';
import iconReducer from '../reducers/iconReducer';
import errorReducer from '../reducers/errorReducer';
import loadingMessageReducer from '../reducers/loadingMessageReducer';

const store = configureStore({
  reducer: {
    icon: iconReducer,
    error: errorReducer,
    loadingMessage: loadingMessageReducer,
  },
});

export default store;