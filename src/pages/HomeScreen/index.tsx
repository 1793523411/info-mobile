import React, {FC} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import storage from '../../storage/index';

const Home = {
  contan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const HomeScreen: FC<any> = () => {
  return (
    <View style={Home.contan as any}>
      <Text>Home!</Text>
      <Icon name="ios-person" size={30} color="#4F8EF7" />

      <TouchableHighlight
        onPress={() => {
          storage.remove({
            key: 'userInfo',
          });
        }}
        underlayColor="#eee">
        <AntdIcon name="pluscircleo" size={30} color="#4F8EF7" />
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
