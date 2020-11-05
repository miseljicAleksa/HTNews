import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { changeLang } from '../../features/language/languageSlice';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import cc from 'classcat';

const LanguageButtons = () => {
  const dispatch = useAppDispatch();

  const handleButtonClickGB = () => {
    localStorage.removeItem('us');

    dispatch(changeLang('gb'));
    setIsActiveGB(true);
    setIsActiveUS(false);
    localStorage.removeItem('us');
    localStorage.setItem('gb', 'gb');
  };

  const handleButtonClickUS = () => {
    dispatch(changeLang('us'));
    setIsActiveGB(false);
    setIsActiveUS(true);
    localStorage.removeItem('gb');
    localStorage.setItem('us', 'us');
  };

  const { language } = useSelector((state) => state.language);

  const [isActiveGB, setIsActiveGB] = useState(
    language || localStorage.getItem('gb'),
  );
  const [isActiveUS, setIsActiveUS] = useState(
    language || localStorage.getItem('us'),
  );

  return (
    <>
      <button
        className={cc({ [style.active]: isActiveGB })}
        onClick={() => {
          handleButtonClickGB();
        }}>
        GB
      </button>
      <button
        className={cc({ [style.active]: isActiveUS })}
        onClick={() => {
          handleButtonClickUS('us');
        }}>
        US
      </button>
    </>
  );
};

export default LanguageButtons;
