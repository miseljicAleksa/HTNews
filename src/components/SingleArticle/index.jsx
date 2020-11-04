import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { usePersistedState } from '../../usePersistedState';

const SingleArticle = ({ match }) => {
  const { urlForArticle } = match.params;

  const x = useSelector((state) =>
    state.news.newsByRegion.find((article) => {
      console.log(article.title, urlForArticle);
      return (
        article.url.split('/').slice(3).join('').replace('/', '_') ===
        urlForArticle
      );
    }),
  );
  const [article, setArticle] = usePersistedState(x, '');
  const y = React.useMemo(() => ({ article, setArticle }), [
    article,
    setArticle,
  ]);
  console.log(y);
  if (!article) {
    return (
      <section>
        <h2>Article not found!</h2>
      </section>
    );
  }

  const { title, content, description, urlToImage } = article;
  const contentOfArticle = content ? content.substring(14, 201) : description;

  return (
    <div className={styles.singleArticleContainer}>
      <h3>{title}</h3>
      <div className={styles.sAimageWrapper}>
        <img className={styles.newsImage} src={urlToImage} />
      </div>
      <div className={styles.sAnewsInfo}>
        <p className={styles.content}>{contentOfArticle}</p>
        <Link to='/' className={styles.back}>
          Back
        </Link>
      </div>
    </div>
  );
};

SingleArticle.propTypes = {
  match: PropTypes.object,
};

export default SingleArticle;
