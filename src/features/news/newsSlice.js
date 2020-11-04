import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsByRegion: [],
  newsByCategories: {},
};

const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsByRegion(state, { payload }) {
      if (payload) {
        state.newsByRegion = payload;
      }
    },
    getNewsByCategories(state, { payload }) {
      if (payload) {
        state.newsByCategories = payload;
      }
    },
  },
});

export const {
  getNewsByRegion,
  getNewsByCategories,
  getOpenedArticle,
} = news.actions;
export default news.reducer;
