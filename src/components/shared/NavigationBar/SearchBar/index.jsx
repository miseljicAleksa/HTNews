import React, { useState } from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getNewsBySearchTerm } from '../../../../api';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { setNewsBySearch } from '../../../../features/news/newsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('troll');
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    await getNewsBySearchTerm(query).then(setNewsBySearch).then(dispatch);
    history.push('/search');
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await getNewsBySearchTerm(query).then(setNewsBySearch).then(dispatch);
      history.push('/search');
    }
  };

  return (
    <div className={style.searchBox}>
      <input
        className={style.searchTxt}
        type={style.text}
        placeholder='Search here..'
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(event) => handleKeyPress(event)}
      />
      <button className={style.searchBtn} onClick={handleClick}>
        <i className=''>
          {' '}
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </button>
    </div>
  );
};

export default SearchBar;
