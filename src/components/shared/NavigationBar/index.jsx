import React from 'react';
import LanguageButtons from '../../LanguageButtons';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';

const NavigationBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navItems}>
        <Link to='/'>
          <li>Top News</li>
        </Link>
        <Link to='/categories'>
          <li>Categories</li>
        </Link>
        <li>Search</li>
      </ul>
      <div className={styles.region}>
        <LanguageButtons />
      </div>
    </div>
  );
};

export default NavigationBar;
