import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './style.module.scss';

const SingleArticle = ({ match, history }) => {
  const { urlForArticle } = match.params;

  const article = useSelector((state) =>
    state.news.newsByRegion.find((article) => {
      const b = article.url
        .split('/')
        .slice(3)
        .join('')
        .replace('[^a-zA-Z0-9]', '');
      return b === urlForArticle;
    }),
  );

  if (!article) {
    return (
      <section>
        <h2>Article not found!</h2>
      </section>
    );
  }

  const { title, content, description, urlToImage } = article;
  const contentOfArticle = content ? content.substring(14, 201) : description;
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className={styles.singleArticleContainer}>
      <h3>{title}</h3>
      <div className={styles.sAimageWrapper}>
        <img className={styles.newsImage} src={urlToImage} />
      </div>
      <div className={styles.sAnewsInfo}>
        <p className={styles.content}>{contentOfArticle}</p>
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
