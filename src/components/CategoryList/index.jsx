import React, { useEffect } from 'react';
import SpecificCategory from './SpecificCategory';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { getNewsByCategories } from '../../api';
import { setNewsByCategories as setNewsByCategoriesSlice } from '../../features/news/newsSlice';

const CategoryList = () => {
  const dispatch = useAppDispatch();

  const { language } = useSelector((state) => state.language);
  const categories = [
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  useEffect(() => {
    getNewsByCategories(language, categories)
      .then(setNewsByCategoriesSlice)
      .then(dispatch)
      .catch(console.error);
  }, [language]);

  return (
    <div>
      {categories.map((category, index) => (
        <SpecificCategory key={category} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
