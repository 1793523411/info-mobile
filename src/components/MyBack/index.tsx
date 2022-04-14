import React, {FC} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import AntdIcon from 'react-native-vector-icons/AntDesign';

const MyBack: FC<any> = ({navigationRef}) => {
  return (
    <TouchableHighlight onPress={navigationRef.goBack}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <AntdIcon
          style={{
            position: 'relative',
            top: 2,
            left: -2,
          }}
          name="left"
          size={13}
          color="#333"
        />
        <Text>返回</Text>
      </View>
    </TouchableHighlight>
  );
};

export default MyBack;
