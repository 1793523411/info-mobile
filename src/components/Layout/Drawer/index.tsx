import React, {FC} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
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
      <DrawerHeader />
      <TouchableHighlight
        onPress={() => {
          console.log('onPress');
          navigationRef.navigate('UserInfo');
          setModalVisible(false);
        }}>
        <Text>Go home</Text>
      </TouchableHighlight>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
      <Text>drawer</Text>
    </View>
  );
};

export default MyDrawer;