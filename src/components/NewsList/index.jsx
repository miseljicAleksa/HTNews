import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { getNewsByCountry } from '../../api';
import PropTypes from 'prop-types';
import './style.scss';

const NewsList = ({ country }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(async () => {
    const articles = await getNewsByCountry(country);
    setNewsList(articles);
  }, [country]);

  return (
    <div className='newsContainer'>
      {newsList.map((newsElement, index) => (
        <NewsCard
          title={newsElement.title}
          imageSrc={newsElement.urlToImage}
          description={newsElement.description}
          key={index}
        />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  country: PropTypes.string,
};

export default NewsList;
