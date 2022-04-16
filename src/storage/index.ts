import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,
});

storage.sync = {
  // sync方法的名字必须和所存数据的key完全相同
  // 参数从params中解构取出
  // 最后返回所需数据或一个promise
  userToken: async () => {
    storage.save({
      key: 'userToken',
      data: {
        token: 'defaulttoken',
      },
      expires: 1000 * 3600,
    });
    return {
      token: 'defaulttoken',
    };
  },
};

export default storage;
