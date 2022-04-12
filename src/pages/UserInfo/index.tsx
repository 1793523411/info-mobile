import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

const User = {
  contan: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const UserInfo: FC<any> = ({navigation}) => {
  return (
    <View style={User.contan as any}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Setting"
        onPress={() => {
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

export default UserInfo;
