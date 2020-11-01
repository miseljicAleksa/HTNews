import axios from 'axios';

export const API_KEY = '17f9e71189114dfa9df6b9ab66043b60';

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
