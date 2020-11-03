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
    console.log(articles);
    dispatch(getNewsByRegion(articles));
  }, [country]);

  return (
    <div className={styles.newsContainer}>
      {news.length &&
        news.map((newsElement, index) => (
          <NewsCard
            title={newsElement.title}
            imageSrc={newsElement.urlToImage}
            description={newsElement.description}
            content={newsElement.content}
            key={index}
          />
        ))}
    </div>
  );
};

NewsList.propTypes = {
  country: PropTypes.string,
  news: PropTypes.array,
};

export default NewsList;
