import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../services/auth.service';

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async (data, {rejectWithValue}) => {
      try {
        const res = await AuthService.authenticate(data);
        return res.data.data;
      } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || error.message,
        );
      }
    },
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (data, {rejectWithValue}) => {
      localStorage.removeItem('userSession');
    },
);

const user = JSON.parse(localStorage.getItem('userSession'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: user || {},
  },
  extraReducers: {
    [authenticate.pending]: (state) => {
      state.loading = true;
    },
    [authenticate.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;

      localStorage.setItem('userSession', JSON.stringify(action.payload));
    },
    [authenticate.rejected]: (state) => {
      state.loading = false;
    },
    [logout.fulfilled]: (state) => {
      delete state.user;
    },
  },
});

const {reducer} = authSlice;

export default reducer;
