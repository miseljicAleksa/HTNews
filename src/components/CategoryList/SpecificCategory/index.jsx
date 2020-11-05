import React, { useState } from 'react';
import NewsCard from '../../NewsList/NewsCard';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import cc from 'classcat';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SpecificCategory = ({ category }) => {
  const [t] = useTranslation('common');

  const { newsByCategories } = useSelector((state) => state.news);
  const [isColapsed, setIsColapsed] = useState(false);
  const handleClick = () => {
    setIsColapsed(!isColapsed);
  };

  return (
    <div className={style.categoryContainer}>
      <div className={style.categoryExtandColapse}>
        <Link to={`/categories/${category}`}>
          <h1 aria-label={category} className={style.categoryTitle}>
            {t(`htn.${category}`)}
          </h1>
        </Link>
        <button
          aria-label='Expand or colapse'
          className={style.extandColapseButton}
          onClick={handleClick}>
          V
        </button>
      </div>
      <div
        className={cc({
          [style.colapsed]: isColapsed,
          [style.categoryArticles]: true,
        })}>
        {newsByCategories[category] ? (
          newsByCategories[category]
            .slice(0, 5)
            .map((article, index) => <NewsCard key={index} article={article} />)
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
