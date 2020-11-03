import React from 'react';
import NewsCard from '../../NewsList/NewsCard';
import style from './style.module.scss';

const SpecificCategory = () => {
  return (
    <>
      <h1 className={style.categoryTitle}>ime kategorije</h1>
      <div className={style.categoryArticles}>
        {[1, 2, 3, 4, 5].map((el) => (
          <NewsCard
            key={el}
            title='tralala'
            description='njanjanja'
            imageSrc='www.google.com'
          />
        ))}
      </div>
    </>
  );
};

export default SpecificCategory;
