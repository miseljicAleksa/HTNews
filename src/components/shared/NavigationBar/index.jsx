import React from 'react';
import LanguageButtons from '../../LanguageButtons';
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
        <LanguageButtons />
      </div>
    </div>
  );
};

export default NavigationBar;
