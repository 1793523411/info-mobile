import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

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
};

function DrawerHeader() {
  const [isAvatorShow, setIsAvatorShow] = useState(false);
  return (
    <View style={Drawer.drawerHead as any}>
      <TouchableHighlight onPress={() => setIsAvatorShow(true)}>
        <Image
          style={Drawer.draweravator}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </TouchableHighlight>

      <Text style={Drawer.drawerHeadNick}>跌倒的小黄瓜</Text>
      <Modal visible={isAvatorShow} transparent={true}>
        <ImageViewer
          onClick={() => setIsAvatorShow(false)}
          imageUrls={[{url: 'https://reactnative.dev/img/tiny_logo.png'}]}
        />
      </Modal>
    </View>
  );
}

export default DrawerHeader;
