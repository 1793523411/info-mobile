import React, {FC, useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import AntdIcon from 'react-native-vector-icons/AntDesign';

const Drawer = {
  drawerHead: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 10,
  },
  draweravator: {
    margin: 5,
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  drawerHeadNick: {
    marginTop: 15,
  },
  drawerIcon: {
    marginTop: 17,
  },
};

const DrawerHeader: FC<any> = ({navigationRef, setModalVisible, userInfo}) => {
  const [isAvatorShow, setIsAvatorShow] = useState(false);
  return (
    <View style={Drawer.drawerHead as any}>
      <TouchableHighlight
        onPress={() => setIsAvatorShow(true)}
        underlayColor="#eee">
        <Image
          style={Drawer.draweravator}
          source={{
            uri: userInfo?.avatar,
          }}
        />
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#eee"
        onPress={() => {
          navigationRef.navigate('UserInfo');
          setModalVisible(false);
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={Drawer.drawerHeadNick}>{userInfo?.nickname}</Text>
          <View style={Drawer.drawerIcon}>
            <AntdIcon name="right" size={13} color="#333" />
          </View>
        </View>
      </TouchableHighlight>

      <Modal visible={isAvatorShow} transparent={true}>
        <ImageViewer
          onClick={() => setIsAvatorShow(false)}
          imageUrls={[{url: userInfo?.avatar}]}
        />
      </Modal>
    </View>
  );
};

export default DrawerHeader;
