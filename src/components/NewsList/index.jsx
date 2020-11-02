import React, { useEffect } from 'react';
import NewsCard from './NewsCard';
import { getNewsByCountry } from '../../api';
import PropTypes from 'prop-types';
import './style.scss';
import { useAppDispatch } from '../../store';
import { getNewsByCategory as getNewsSlice } from '../../features/news/newsSlice';

const NewsList = ({ news, country }) => {
  const dispatch = useAppDispatch();

  useEffect(async () => {
    const articles = await getNewsByCountry(country);
    dispatch(getNewsSlice(articles));
  }, [country]);

  return (
    <div className='newsContainer'>
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
