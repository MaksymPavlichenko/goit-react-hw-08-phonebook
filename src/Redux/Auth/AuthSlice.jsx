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
    [signIn.pending]: (state) => {
      state.isRefreshed = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
      state.isRefreshed = false;
    },
    [signIn.rejected]: (state) => {
      state.isRefreshed = true;
    },
    [logIn.pending]: (state) => {
      state.isRefreshed = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
      state.isRefreshed = false;
    },
    [logIn.rejected]: (state) => {
      state.isRefreshed = true;
    },
    [logOut.pending]: (state) => {
      state.isRefreshed = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
      state.isRefreshed = false;
    },
    [logOut.rejected]: (state) => {
      state.isRefreshed = true;
    },
    [getRefresh.pending]: (state) => {
      state.isRefreshed = true;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
      state.isRefreshed = false;
    },
    [getRefresh.rejected]: (state, { payload }) => {
      state.token = '';
      state.isRefreshed = false;
    },
  },
});

export default authSlice.reducer;