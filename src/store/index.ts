import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducers/chat';
import settingsReducer from './reducers/settings';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    settings: settingsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
