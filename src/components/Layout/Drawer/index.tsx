import React, {FC} from 'react';
import {Text, View} from 'react-native';
import DrawerHeader from './DrawerHeader';
import AntdIcon from 'react-native-vector-icons/AntDesign';

const Drawer = {
  drawer: {
    backgroundColor: '#fffffff9',
    height: '100%',
    width: '100%',
    padding: 5,
  },
};
const MyDrawer: FC<any> = ({navigationRef, setModalVisible, userInfo}) => {
  return (
    <View style={Drawer.drawer}>
      <DrawerHeader
        navigationRef={navigationRef}
        setModalVisible={setModalVisible}
        userInfo={userInfo}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 8,
        }}>
        <AntdIcon name="user" size={20} color={'#b4b3b3'} />
        <Text> 个人中心</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 8,
        }}>
        <AntdIcon name="hearto" size={20} color={'#b4b3b3'} />
        <Text> 个人收藏</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 8,
        }}>
        <AntdIcon name="meh" size={20} color={'#b4b3b3'} />
        <Text> 表情</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 8,
        }}>
        <AntdIcon name="setting" size={20} color={'#b4b3b3'} />
        <Text> 设置</Text>
      </View>
    </View>
  );
};

export default MyDrawer;
