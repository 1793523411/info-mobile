import storage from '../index';

export const saveUserToken = (token: string) => {
  storage.save({
    key: 'userToken',
    data: {
      token: token,
    },
    expires: 1000 * 3600,
  });
};

export const getUserToken = async () => {
  try {
    const res = await storage.load({
      key: 'userToken',
      autoSync: true,
    });
    return res;
  } catch (error) {
    return 'storage error';
  }
};

export const saveUserInfo = (userInfo: any) => {
  storage.save({
    key: 'userInfo',
    data: {
      userInfo,
    },
    expires: 1000 * 3600,
  });
};

export const getUserInfo = async () => {
  try {
    const res = await storage.load({
      key: 'userInfo',
      autoSync: true,
    });
    return res;
  } catch (error) {
    return 'storage error';
  }
};
