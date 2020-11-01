import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
};

const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsByCategory(state, { payload }) {
      if (payload) {
        state.news = payload;
      }
    },
  },
});

export const { getNewsByCategory } = news.actions;
export default news.reducer;
