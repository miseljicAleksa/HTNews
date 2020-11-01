import React from 'react';
import { useAppDispatch } from '../../store';
import { changeLang } from '../../features/language/languageSlice';

const LanguageButtons = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (country) => {
    dispatch(changeLang(country));
  };

  return (
    <>
      <button
        onClick={() => {
          handleButtonClick('gb');
        }}>
        GB
      </button>
      <button
        onClick={() => {
          handleButtonClick('us');
        }}>
        US
      </button>
    </>
  );
};

export default LanguageButtons;
