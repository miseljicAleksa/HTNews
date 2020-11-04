import React, { useState } from 'react';
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getNewsBySearchTerm } from '../../../../api';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { getNewsBySearch } from '../../../../features/news/newsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('troll');
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const articles = await getNewsBySearchTerm(query);
    dispatch(getNewsBySearch(articles));
    history.push('/search');
  };

  return (
    <>
      <div className={style.style}>
        <div className={style.searchBox}>
          <input
            className={style.searchTxt}
            type={style.text}
            placeholder='Search here..'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={style.searchBtn} onClick={handleClick}>
            <i className=''>
              {' '}
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
