import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

const SetStyles = {
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
const Setting: FC<any> = ({navigation}) => {
  return (
    <View style={SetStyles.contain as any}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Setting... again"
        onPress={() => {
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

export default Setting;
