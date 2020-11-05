import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { getNewsByCountry, getNewsByCategory } from '../../api';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { useAppDispatch } from '../../store';
import {
  setNewsByRegion,
  setNewsByCategory,
} from '../../features/news/newsSlice';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsList = ({ country, location: { pathname } }) => {
  const [t] = useTranslation('common');
  const dispatch = useAppDispatch();
  const [error, setError] = useState(null);

  let category;
  if (!pathname.includes('/news')) {
    category = pathname.split('/').slice(2).join('');
  }

  useEffect(() => {
    if (category) {
      getNewsByCategory(country, category)
        .then(setNewsByCategory)
        .then(dispatch)
        .catch((e) => {
          setError(e);
          console.log(error);
          console.error(e);
        });
    } else {
      getNewsByCountry(country)
        .then(setNewsByRegion)
        .then(dispatch)
        .catch((e) => {
          setError(e);
          console.log(error);
          console.error(e);
        });
    }
  }, [country]);

  const { newsByRegion } = useSelector((state) => state.news);
  const { newsByCategory } = useSelector((state) => state.news);

  return (
    <div className={styles.topNewsContainer}>
      {category ? <h1>{t(`htn.${category}`)}</h1> : <h1>{t('htn.topNews')}</h1>}
      <div className={styles.newsContainer}>
        {!category &&
          newsByRegion.map((newsElement, index) => (
            <NewsCard article={newsElement} key={index} />
          ))}
        {category &&
          newsByCategory.map((newsElement, index) => (
            <NewsCard article={newsElement} key={index} />
          ))}
      </div>
    </div>
  );
};

NewsList.propTypes = {
  country: PropTypes.string,
  location: PropTypes.object,
};

export default withRouter(NewsList);
