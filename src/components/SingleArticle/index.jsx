import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './style.module.scss';

const SingleArticle = ({ match, history }) => {
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
  const articleContent = content ? content.substring(14, 201) : description;
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className={styles.singleArticleContainer}>
      <h1>{title}</h1>
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
        <p className={styles.content}>{articleContent}</p>
        <button onClick={handleClick} className={styles.back}>
          Back
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
