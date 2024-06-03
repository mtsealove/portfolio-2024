import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/reducers/images';
import userReducer from '@/reducers/user';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
