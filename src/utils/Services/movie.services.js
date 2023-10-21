import axiosInstance from './api.services';

const getDataMovie = async () => {
  try {
    const res = await axiosInstance.get('/discover/movie');
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getGenreMovie = async () => {
  try {
    const res = await axiosInstance.get('/genre/movie/list');
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const movieServices = {
  getDataMovie,
  getGenreMovie,
};
