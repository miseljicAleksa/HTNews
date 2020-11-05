import React from 'react';
import LanguageButtons from '../../LanguageButtons';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <div className={styles.container}>
      <ul className={styles.navItems}>
        <Link aria-label='news' to='/news' className={styles.itemLink}>
          <li className={styles.item}>{t('htn.topNews')}</li>
        </Link>
        <Link
          aria-label='categories'
          to='/categories'
          className={styles.itemLink}>
          <li className={styles.item}>{t('htn.categories')}</li>
        </Link>
        <Link aria-label='Search' to='/search' className={styles.itemLink}>
          <li className={styles.item}>{t('htn.search')}</li>
        </Link>
      </ul>
      <div className={styles.region}>
        <button onClick={() => i18n.changeLanguage('sr')}>srb</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
      <div className={styles.region}>
        <LanguageButtons />
      </div>
    </div>
  );
};

export default NavigationBar;
