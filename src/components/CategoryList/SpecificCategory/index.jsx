/* eslint-disable multiline-ternary */
import React, { useState } from 'react';
import NewsCard from '../../NewsList/NewsCard';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import cc from 'classcat';
import Carousel from 'react-elastic-carousel';

const SpecificCategory = ({ category }) => {
  const { newsByCategories } = useSelector((state) => state.news);
  const [isColapsed, setIsColapsed] = useState(false);
  const handleClick = () => {
    setIsColapsed(!isColapsed);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className={style.categoryContainer}>
      <div className={style.categoryExtandColapse}>
        <h1 className={style.categoryTitle}>{category}</h1>
        <button className={style.extandColapseButton} onClick={handleClick}>
          V
        </button>
      </div>
      <div
        className={cc({
          [style.colapsed]: isColapsed,
          [style.categoryArticles]: true,
        })}>
        <Carousel itemsToShow={breakPoints}>
          {newsByCategories[category] ? (
            newsByCategories[category].map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          ) : (
            <p>loading...</p>
          )}
        </Carousel>
      </div>
    </div>
  );
};

SpecificCategory.propTypes = {
  category: PropTypes.string,
};

export default SpecificCategory;
