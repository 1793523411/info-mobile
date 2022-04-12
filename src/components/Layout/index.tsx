import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Drawer from 'react-native-drawer';
import MyDrawer from './Drawer';
import Header from './Header';

const LayoutContain = StyleSheet.create({
  contain: {
    width: '100%',
    height: '100%',
    backgroundColor: '#A3E4DB',
  },
});
const Layout: FC<any> = ({children, navigationRef}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    console.log('layout~~~');
  }, []);
  return (
    <View style={LayoutContain.contain}>
      <Drawer
        content={
          <MyDrawer
            navigationRef={navigationRef}
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
        <Header setModalVisible={setModalVisible} />
        {children}
      </Drawer>
    </View>
  );
};

export default Layout;
