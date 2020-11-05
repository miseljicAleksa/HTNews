import axios from 'axios';

const API_KEY = '17f9e71189114dfa9df6b9ab66043b60';
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

const getNewsByCategory = async (country, category) => {
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
