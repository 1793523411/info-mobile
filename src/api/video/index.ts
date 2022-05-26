import instance from '../index';

export const getVideoList = ({data}: any) => {
  return instance({
    url: '/api/v1/get_video_list',
    method: 'post',
    data,
  });
};

export const getVideoDetail = ({rid}: any) => {
  return instance({
    url: '/api/v1/search_video_list',
    method: 'get',
    params: {
      rid,
    },
  });
};
