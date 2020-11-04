import React, { useEffect } from 'react';
import NewsCard from './NewsCard';
import { getNewsByCountry } from '../../api';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { useAppDispatch } from '../../store';
import { getNewsByRegion } from '../../features/news/newsSlice';

const NewsList = ({ news, country }) => {
  const dispatch = useAppDispatch();

  useEffect(async () => {
    const articles = await getNewsByCountry(country);
    dispatch(getNewsByRegion(articles));
  }, [country]);

  return (
    <div className={styles.topNewsContainer}>
      <h1>Top News</h1>
      <div className={styles.newsContainer}>
        {news.length &&
          news.map((newsElement, index) => (
            <NewsCard article={newsElement} key={index} />
          ))}
      </div>
    </div>
  );
};

NewsList.propTypes = {
  country: PropTypes.string,
  news: PropTypes.array,
};

export default NewsList;
