import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000,
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return {
        code: -1,
        msg: '发生错误',
      };
    }
    return response.data;
  },
  error => {
    Promise.reject(error);
  },
);

export default instance;
