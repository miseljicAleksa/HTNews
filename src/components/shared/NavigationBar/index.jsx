import React from 'react';
import './style.scss';

const NavigationBar = () => {
  return (
    <div className='container'>
      <ul className='navItems'>
        <li>Top News</li>
        <li>Categories</li>
        <li>Search</li>
      </ul>
      <div className='region'>
        <button>GB</button>
        <button>US</button>
      </div>
    </div>
  );
};

export default NavigationBar;
