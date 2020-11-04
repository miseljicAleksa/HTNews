import React from 'react';
import LanguageButtons from '../../LanguageButtons';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const NavigationBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navItems}>
        <Link to='/' className={styles.itemLink}>
          <li className={styles.item}>Top News</li>
        </Link>
        <Link to='/categories' className={styles.itemLink}>
          <li className={styles.item}>Categories</li>
        </Link>
        <Link to='/search' className={styles.itemLink}>
          <li className={styles.item}>Search</li>
        </Link>
      </ul>
      <div className={styles.region}>
        <LanguageButtons />
      </div>
    </div>
  );
};

export default NavigationBar;
