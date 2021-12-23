const API_KEY = '828b1538f9d5180b60ced5e3167986a1';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  },
  fetchActionMovies: {
    title: 'Action ',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy ',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror ',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchDocumentires: {
    title: 'Documentires',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: 'Tv Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
