import instance from '../index';

export const getUserInfo = (uid: any) => {
  return instance({
    url: '/api/v1/search_user_info',
    method: 'get',
    params: {
      uid,
    },
  });
};
export const updateUserInfo = ({data}: any) => {
  return instance({
    url: '/api/v1/save_user_info',
    method: 'post',
    data,
  });
};

export const userLogin = ({data}: any): any => {
  return instance({
    url: '/user/login',
    method: 'post',
    data,
  });
};
