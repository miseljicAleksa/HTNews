import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const NewsCard = ({ title, imageSrc, description }) => {
  let titleToUrl = title.split(' ');
  titleToUrl = titleToUrl.join('_');

  return (
    <div className={styles.cardContainer}>
      <h3>{title}</h3>
      <div className={styles.imageWrapper}>
        <img className={styles.newsImage} src={imageSrc} />
      </div>
      <div className={styles.newsInfo}>
        <p>{description}</p>
        <Link className={styles.more} to={`news/${titleToUrl}`}>
          More
        </Link>
      </div>
    </div>
  );
};

const { string } = PropTypes;
NewsCard.propTypes = {
  title: string,
  imageSrc: string,
  description: string,
};

export default NewsCard;
