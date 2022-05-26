import instance from '../index';

export const getTopList = ({data}: any) => {
  return instance({
    url: '/api/v1/get_topic_list',
    method: 'post',
    data,
  });
};

export const getTopDetail = ({rid}: any) => {
  return instance({
    url: '/api/v1/search_topic_list',
    method: 'get',
    params: {
      rid,
    },
  });
};
