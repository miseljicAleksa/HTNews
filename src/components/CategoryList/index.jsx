import React, { useEffect } from 'react';
import SpecificCategory from './SpecificCategory';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { getNewsByCategories as getNewsByCategoriesApi } from '../../api';
import { getNewsByCategories as getNewsByCategoriesSlice } from '../../features/news/newsSlice';

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
  useEffect(async () => {
    const entertainment = await getNewsByCategoriesApi(language, categories);
    dispatch(getNewsByCategoriesSlice(entertainment));
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
