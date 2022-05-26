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
    borderRadius: 15,
  },
};

const Header: FC<any> = ({setModalVisible, userInfo}) => {
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
            uri: userInfo?.avatar,
          }}
        />
      </TouchableHighlight>
      <Text
        style={{
          paddingTop: 3,
        }}>
        {userInfo?.nickname}
      </Text>
    </View>
  );
};

export default Header;
