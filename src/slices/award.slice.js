import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AwardService from '../services/award.service';

export const get = createAsyncThunk(
    'award/get',
    async (data, {rejectWithValue}) => {
      try {
        const res = await AwardService.get(data);
        return res.data.data;
      } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || error.message,
        );
      }
    },
);

const awardSlice = createSlice({
  name: 'award',
  initialState: {loading: false},
  extraReducers: {
    [get.pending]: (state) => {
      state.loading = true;
    },
    [get.fulfilled]: (state, action) => {
      state.loading = false;
      state.awards = action.payload;
    },
    [get.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const {reducer} = awardSlice;

export default reducer;
