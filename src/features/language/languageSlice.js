import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'gb',
};

const language = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLang (state, { payload }) {
      if (payload) {
        state.language = payload;
      }
    },
  },
});

export const { changeLang } = language.actions;
export default language.reducer;
