import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducers/chat';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default store;