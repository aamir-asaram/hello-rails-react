import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch('/api/v1/greeting');
    const json = await response.json();
    return json.data;
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.greetings = action.payload;
      state.loading = false;
    },
    [fetchGreetings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default greetingsSlice.reducer;
