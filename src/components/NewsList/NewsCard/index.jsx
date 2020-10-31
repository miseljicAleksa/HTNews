import React from 'react';
import './style.scss';

const NewsCard = () => {
  return (
    <div className='cardContainer'>
      <h3>Title</h3>
      <div className='imageWrapper'>
        <img
          className='newsImage'
          src='https://www.nationalgeographic.rs/files/images/2013/Vincent_van_Gogh___National_Gallery_of_Art_681308748.jpg'
        />
      </div>
      <div className='newsInfo'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, omnis
          saepe. Quia ipsum soluta alias.
        </p>
        <a className='more' href='www.facebook.com'>
          {' '}
          more{' '}
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
