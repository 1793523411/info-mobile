import instance from '../index';

export const getVideoList = ({data}: any) => {
  return instance({
    url: '/api/v1/get_video_list',
    method: 'post',
    data,
  });
};
