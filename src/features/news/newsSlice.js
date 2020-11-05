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
    setNewsByRegion(state, { payload }) {
      if (payload) {
        return { ...state, newsByRegion: payload };
      }
    },
    setNewsByCategories(state, { payload }) {
      if (payload) {
        return { ...state, newsByCategories: payload };
      }
    },
    setNewsBySearch(state, { payload }) {
      if (payload) {
        return { ...state, newsBySearch: payload };
      }
    },
  },
});

export const {
  setNewsByRegion,
  setNewsByCategories,
  setNewsBySearch,
} = news.actions;
export default news.reducer;
