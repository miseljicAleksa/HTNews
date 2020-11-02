import React from 'react';
import LanguageButtons from '../../LanguageButtons';
import { Link } from 'react-router-dom';

import './style.scss';

const NavigationBar = () => {
  return (
    <div className='container'>
      <ul className='navItems'>
        <Link to='/'>
          <li>Top News</li>
        </Link>
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
