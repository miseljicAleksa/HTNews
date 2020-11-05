import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { changeLang } from '../../features/language/languageSlice';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cc from 'classcat';
import PropTypes from 'prop-types';

const LanguageButtons = ({ location: { pathname } }) => {
  const { language } = useSelector((state) => state.language);
  const [isOnArticlePage, setisOnArticlePage] = useState(false);
  const [localLanguage, setLocalLanguage] = useState(
    localStorage.getItem('lang') || language,
  );

  const dispatch = useAppDispatch();

  const handleButtonClickGB = () => {
    dispatch(changeLang('gb'));
    setLocalLanguage('gb');
    localStorage.setItem('lang', 'gb');
  };

  const handleButtonClickUS = () => {
    dispatch(changeLang('us'));
    setLocalLanguage('us');
    localStorage.setItem('lang', 'us');
  };

  const isActiveGB = localLanguage === 'gb';

  useEffect(() => {
    if (localStorage.getItem('lang') === 'us') {
      dispatch(changeLang('us'));
    } else {
      dispatch(changeLang('gb'));
    }
  }, [language]);

  useEffect(() => {
    if (pathname.includes('/article')) {
      setisOnArticlePage(true);
    } else {
      setisOnArticlePage(false);
    }
  }, [pathname]);

  return (
    <>
      <button
        className={cc({ [style.active]: isActiveGB })}
        aria-label='Change language to GB'
        disabled={isOnArticlePage}
        onClick={() => {
          handleButtonClickGB();
        }}>
        GB
      </button>
      <button
        className={cc({ [style.active]: !isActiveGB })}
        aria-label='Change language to US'
        disabled={isOnArticlePage}
        onClick={() => {
          handleButtonClickUS('us');
        }}>
        US
      </button>
    </>
  );
};

LanguageButtons.propTypes = {
  location: PropTypes.object,
};

export default withRouter(LanguageButtons);
