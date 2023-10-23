import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    try {
      const response = await fetch('/api/v1/greeting');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      const json = await response.json();

      return json;
    } catch (error) {
      throw error;
    }
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        const data = action.payload.greeting;
        state.greeting = data;
        state.loading = false;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export default greetingsSlice.reducer;
