import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import messengerReducer from './messengerSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    messenger: messengerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
