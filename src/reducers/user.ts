import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/auth';

export interface UserValue {
    user?: User;
}

const initialState: UserValue = {

};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login(state, payload: PayloadAction<User>) {
      state.user = payload.payload;
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;

export const { login } = userSlice.actions;
