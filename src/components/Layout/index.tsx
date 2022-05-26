import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Drawer from 'react-native-drawer';
import {getUserInfo} from '../../storage/user';
import {redirectLogin} from '../../utils/redirect';
import MyDrawer from './Drawer';
import Header from './Header';

const LayoutContain = StyleSheet.create({
  contain: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
const Layout: FC<any> = ({children, navigationRef}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState<Record<string, any>>({});
  const getUserInfoFromstorage = async () => {
    const res = await getUserInfo();
    if (!res?.userInfo) {
      redirectLogin(navigationRef);
      return;
    }
    setUserInfo(res.userInfo);
  };
  useEffect(() => {
    getUserInfoFromstorage();
  }, []);
  useEffect(() => {
    // console.log('layout~~~');
  }, []);
  return (
    <View style={LayoutContain.contain}>
      <Drawer
        content={
          <MyDrawer
            navigationRef={navigationRef}
            userInfo={userInfo}
            setModalVisible={setModalVisible}
          />
        }
        open={modalVisible}
        type={'overlay'}
        openDrawerOffset={viewport => viewport.width * 0.35}
        tapToClose={true}
        onClose={() => setModalVisible(false)}
        panCloseMask={0.3}
        side={'left'}>
        <Header
          setModalVisible={setModalVisible}
          navigationRef={navigationRef}
          userInfo={userInfo}
        />
        {children}
      </Drawer>
    </View>
  );
};

export default Layout;
