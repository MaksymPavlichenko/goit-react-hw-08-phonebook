import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './AuthOperations.jsx';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogin: false,
  isRefreshed: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
      state.isRefreshed = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
      state.isRefreshed = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
      state.isRefreshed = false;
    },
    [getRefresh.rejected]: (state, { payload }) => {
      state.token = '';
    },
  },
});

export default authSlice.reducer;