import React, {FC} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const Drawer = {
  header: {
    height: 35,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
  },
  headImg: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
};

const Header: FC<any> = ({setModalVisible}) => {
  return (
    <View style={Drawer.header as any}>
      <TouchableHighlight
        underlayColor="#eee"
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image
          style={Drawer.headImg}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </TouchableHighlight>
      <Text>title</Text>
    </View>
  );
};

export default Header;
