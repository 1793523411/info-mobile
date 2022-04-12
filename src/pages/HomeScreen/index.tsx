import React, {FC} from 'react';
import {Text, View} from 'react-native';

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
    </View>
  );
};

export default HomeScreen;
