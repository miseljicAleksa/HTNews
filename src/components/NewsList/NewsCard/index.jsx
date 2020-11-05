import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsCard = ({ article }) => {
  const [t] = useTranslation('common');
  const { title, urlToImage, description, url } = article;
  const toUrl = (title) =>
    title.split('/').slice(3).join('').replace('[^a-zA-Z0-9]', '');
  const urlForArticle = toUrl(url);
  return (
    <div className={styles.cardContainer}>
      <h3 aria-label={title}>{title}</h3>
      <div className={styles.imageWrapper}>
        <img
          className={styles.newsImage}
          src={
            urlToImage ||
            'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
          }
        />
      </div>
      <div className={styles.newsInfo}>
        <p aria-label={description}>
          {description || 'Click More button to see article content...'}
        </p>
      </div>
      <Link
        aria-label='More'
        className={styles.more}
        to={`/article/${urlForArticle}`}>
        {t('htn.more')}
      </Link>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object,
};

export default NewsCard;
