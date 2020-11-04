import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  const { title, urlToImage, description, url } = article;
  const toUrl = (url) => url.split('/').slice(3).join('').replace('/', '_');
  const urlForArticle = toUrl(url);

  return (
    <div className={styles.cardContainer}>
      <h3>{title}</h3>
      <div className={styles.imageWrapper}>
        <img className={styles.newsImage} src={urlToImage} />
      </div>
      <div className={styles.newsInfo}>
        <p>{description}</p>
        <Link className={styles.more} to={`news/${url ? urlForArticle : url}`}>
          More
        </Link>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object,
};

export default NewsCard;
