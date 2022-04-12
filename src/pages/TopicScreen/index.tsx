import React, {FC} from 'react';
import {Text, View} from 'react-native';

const Topic = {
  contan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const TopicScreen: FC<any> = () => {
  return (
    <View style={Topic.contan as any}>
      <Text>topic!</Text>
    </View>
  );
};

export default TopicScreen;
