import React from 'react';
import { useAppDispatch } from '../../store';
import { changeLang } from '../../features/language/languageSlice';
import style from './style.module.scss';

const LanguageButtons = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (country) => {
    dispatch(changeLang(country));
  };

  return (
    <>
      <button
        autoFocus
        className={style.languageButton}
        onClick={() => {
          handleButtonClick('gb');
        }}>
        GB
      </button>
      <button
        className={style.languageButton}
        onClick={() => {
          handleButtonClick('us');
        }}>
        US
      </button>
    </>
  );
};

export default LanguageButtons;
