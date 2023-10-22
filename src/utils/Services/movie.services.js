import axiosInstance from './api.services';

const getDataMovies = async ({ page = 1, genre }) => {
  try {
    const res = await axiosInstance.get(
      `/discover/movie?page=${page}&with_genres=${genre}`
    );
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getGenreMovies = async () => {
  try {
    const res = await axiosInstance.get('/genre/movie/list');
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieById = async (id) => {
  try {
    const res = await axiosInstance.get(`/movie/${id}`);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieBySearch = async (query) => {
  try {
    const res = await axiosInstance.get(`/search/movie?query=${query}`);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const movieServices = {
  getDataMovies,
  getGenreMovies,
  getMovieById,
  getMovieBySearch,
};
