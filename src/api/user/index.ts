import instance from '../index';

export const getUserInfo = () => {
  return instance({
    url: '/api/v1/search_user_info',
    method: 'get',
    params: {
      uid: '5577006791947779000',
      username: 'ygj111',
    },
    headers: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlnajExMSIsInBhc3N3b3JkIjoicmVmcmVzaCIsImV4cCI6MTY1MDEwMzkyMn0.lmKrExwbZhRS2PycczT343LPt0-vcCCO611jVqWFhyQ',
    },
  });
};

export const userLogin = ({data}: any) => {
  return instance({
    url: '/user/login',
    method: 'post',
    data,
  });
};
