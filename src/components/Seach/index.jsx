import React from 'react';
import NewsCard from '../NewsList/NewsCard';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import SearchBar from '../shared/NavigationBar/SearchBar';

const SearchPage = () => {
  const { newsBySearch } = useSelector((state) => state.news);
  return (
    <div>
      <SearchBar />
      <div className={styles.newsContainer}>
        {newsBySearch.length &&
          newsBySearch.map((newsElement, index) => (
            <NewsCard article={newsElement} key={index} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
