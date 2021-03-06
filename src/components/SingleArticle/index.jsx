import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

const SingleArticle = ({ match, history }) => {
  const [t] = useTranslation('common');
  const { urlForArticle } = match.params;
  const articleFromStorage = localStorage.getItem('openedArticle');
  const [article, setArticle] = useState(JSON.parse(articleFromStorage) || {});

  const articleFromRedux = useSelector(({ news }) =>
    news.newsByRegion.find((article) => {
      return (
        article.url.split('/').slice(3).join('').replace('[^a-zA-Z0-9]', '') ===
        urlForArticle
      );
    }),
  );

  useEffect(() => {
    if (articleFromRedux) {
      setArticle(articleFromRedux);
    }
  });

  useEffect(() => {
    localStorage.setItem('openedArticle', JSON.stringify(article));
  }, [article]);

  const { title, content, description, urlToImage } = article;
  const articleContent = content ? content.substring(0, 201) : description;
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className={styles.singleArticleContainer}>
      <h1 aria-label={title}>{title}</h1>
      <div className={styles.sAimageWrapper}>
        <img
          className={styles.newsImage}
          src={
            urlToImage ||
            'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'
          }
          alt={urlToImage}
        />
      </div>
      <div className={styles.sAnewsInfo}>
        <p aria-label={articleContent} className={styles.content}>
          {articleContent}
        </p>
        <button aria-label='Back' onClick={handleClick} className={styles.back}>
          {t('htn.back')}
        </button>
      </div>
    </div>
  );
};

SingleArticle.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(SingleArticle);
