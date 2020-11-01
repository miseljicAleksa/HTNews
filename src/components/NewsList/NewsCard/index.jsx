import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NewsCard = ({ title, imageSrc, description }) => {
  return (
    <div className='cardContainer'>
      <h3>{title}</h3>
      <div className='imageWrapper'>
        <img className='newsImage' src={imageSrc} />
      </div>
      <div className='newsInfo'>
        <p>{description}</p>
        <a className='more' href='www.facebook.com'>
          More
        </a>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

export default NewsCard;
