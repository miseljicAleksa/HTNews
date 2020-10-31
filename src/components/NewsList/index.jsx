import React from 'react';
import NewsCard from './NewsCard';
import './style.scss';

const NewsList = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000000];

  return (
    <div className='newsContainer'>
      {news.map((newsElement, index) => (
        <NewsCard key={index} />
      ))}
    </div>
  );
};

export default NewsList;
