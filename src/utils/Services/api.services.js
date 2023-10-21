import axios from 'axios';
import configs from '../configs';

const axiosInstance = axios.create({
  baseURL: configs.BASE_URL,
  params: {
    api_key: configs.API_KEY,
  },
});

export default axiosInstance;
