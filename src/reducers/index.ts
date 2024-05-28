import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '@/reducers/images';

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
