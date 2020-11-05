import React, { useState } from 'react';
import NewsCard from '../../NewsList/NewsCard';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import cc from 'classcat';

const SpecificCategory = ({ category }) => {
  const { newsByCategories } = useSelector((state) => state.news);
  const [isColapsed, setIsColapsed] = useState(false);
  const handleClick = () => {
    setIsColapsed(!isColapsed);
  };

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
        {newsByCategories[category] ? (
          newsByCategories[category].map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

SpecificCategory.propTypes = {
  category: PropTypes.string,
};

export default SpecificCategory;
