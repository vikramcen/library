import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state, action) => {
      state.accessToken = undefined;
      state.user = undefined;
      localStorage.removeItem('auth');
    },
    updateAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut, updateAuthUser } = authSlice.actions;
