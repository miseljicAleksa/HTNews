import axios from 'axios';

export const API_KEY = 'abe8a7be4ab84a68a4e6a7ad44f10564';

axios.defaults.baseURL = 'http://newsapi.org/v2/';

export const getNewsByCountry = async (country) => {
  try {
    const response = await axios.get('/top-headlines', {
      params: {
        country: country,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};

const getNewsByCategory = async (country, category) => {
  try {
    const response = await axios.get('/top-headlines', {
      params: {
        country: country,
        category: category,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const getNewsByCategories = async (country, categories) => {
  const allNewsByCategory = await Promise.all(
    categories.map(async (category) => {
      const response = await getNewsByCategory(country, category);
      return response;
    }),
  );
  const formatedNews = {};

  categories.forEach((category, index) => {
    formatedNews[category] = allNewsByCategory[index];
  });
  return formatedNews;
};

export const getNewsBySearchTerm = async (query) => {
  try {
    const response = await axios.get('/top-headlines', {
      params: {
        q: query,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};
