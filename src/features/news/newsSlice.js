import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsByRegion: [],
  newsByCategories: {},
  newsBySearch: [],
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
    getNewsBySearch(state, { payload }) {
      if (payload) {
        state.newsBySearch = payload;
      }
    },
  },
});

export const {
  getNewsByRegion,
  getNewsByCategories,
  getNewsBySearch,
} = news.actions;
export default news.reducer;
