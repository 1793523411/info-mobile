import React, {FC} from 'react';
import {View} from 'react-native';
import DrawerHeader from './DrawerHeader';

const Drawer = {
  drawer: {
    backgroundColor: '#fffffff9',
    height: '100%',
    width: '100%',
    padding: 5,
  },
};
const MyDrawer: FC<any> = ({navigationRef, setModalVisible}) => {
  return (
    <View style={Drawer.drawer}>
      <DrawerHeader
        navigationRef={navigationRef}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default MyDrawer;
