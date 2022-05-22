import axios from 'axios';
import {getUserToken} from '../storage/user';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000,
});

const allNeedToken = [
  '/api/v1/search_user_info',
  '/api/v1/save_user_info',
  '/api/v1/get_video_list',
  '/api/v1/get_topic_list',
];

instance.interceptors.request.use(
  async config => {
    if (allNeedToken.includes(config.url!)) {
      const res = await getUserToken();
      config.headers!.token = res.token;
    }
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
    return response.data as any;
  },
  error => {
    Promise.reject(error);
  },
);

export default instance;
