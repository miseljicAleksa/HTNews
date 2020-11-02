import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

const NewsCard = ({ title, imageSrc, description }) => {
  let titleToUrl = title.split(' ');
  titleToUrl = titleToUrl.join('_');

  return (
    <div className='cardContainer'>
      <h3>{title}</h3>
      <div className='imageWrapper'>
        <img className='newsImage' src={imageSrc} />
      </div>
      <div className='newsInfo'>
        <p>{description}</p>
        <Link className='more' to={`/${titleToUrl}`}>
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
