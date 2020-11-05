import axios from 'axios';

// if news wont load, first thing,
// try different key cause of limitation
const API_KEY = '6c44276ec4894f298e38bf0038573116';
const TOP_HEADLINES_PATH = '/top-headlines';

axios.defaults.baseURL = 'http://newsapi.org/v2';

export const getNewsByCountry = async (country) => {
  try {
    const {
      data: { articles },
    } = await axios.get(TOP_HEADLINES_PATH, {
      params: {
        country,
        apiKey: API_KEY,
      },
    });
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getNewsByCategory = async (country, category) => {
  try {
    const {
      data: { articles },
    } = await axios.get(TOP_HEADLINES_PATH, {
      params: {
        country,
        category,
        apiKey: API_KEY,
      },
    });
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const getNewsByCategories = async (country, categories) => {
  const categoryToNews = async (category) =>
    await getNewsByCategory(country, category);
  const allNewsByCategory = await Promise.all(categories.map(categoryToNews));
  return categories.reduce(
    (acc, category, index) => ({
      ...acc,
      [category]: allNewsByCategory[index],
    }),
    {},
  );
};

export const getNewsBySearchTerm = async (query) => {
  try {
    const {
      data: { articles },
    } = await axios.get(TOP_HEADLINES_PATH, {
      params: {
        q: query,
        apiKey: API_KEY,
      },
    });
    return articles;
  } catch (error) {
    console.error(error);
  }
};
