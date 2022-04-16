import storage from '../index';

export const saveUserToken = (token: string) => {
  storage.save({
    key: 'userToken',
    data: {
      token: token,
    },
    // expires: 1000 * 3600,
    expires: 10,
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
