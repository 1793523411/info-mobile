import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntdIcon from 'react-native-vector-icons/AntDesign';

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
      <AntdIcon name="pluscircleo" size={30} color="#4F8EF7" />
    </View>
  );
};

export default HomeScreen;
