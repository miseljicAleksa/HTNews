import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from './features/news/newsSlice';
import languageReducer from './features/language/languageSlice';

const rootReducer = combineReducers({
  news: newsReducer,
  language: languageReducer,
});

export default rootReducer;
