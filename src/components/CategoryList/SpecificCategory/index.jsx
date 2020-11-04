/* eslint-disable multiline-ternary */
import React from 'react';
import NewsCard from '../../NewsList/NewsCard';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SpecificCategory = ({ category }) => {
  const { newsByCategories } = useSelector((state) => state.news);
  console.log(newsByCategories[category]);

  return (
    <>
      <h1 className={style.categoryTitle}>{category}</h1>
      <div className={style.categoryArticles}>
        {newsByCategories[category] ? (
          newsByCategories[category].map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
};

SpecificCategory.propTypes = {
  category: PropTypes.string,
};

export default SpecificCategory;
