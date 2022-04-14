import React, {FC, useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ShowType, MokcUserInfoData, userInfoMap, RoleMap} from './userConfig';

const User = StyleSheet.create({
  Contain: {
    backgroundColor: '#fff',
    height: '100%',
  },
  CellItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderBottomColor: '#eee',
  },
});

const CellComponent: FC<any> = ({type, targetData}) => {
  const [isAvatorShow, setIsAvatorShow] = useState(false);
  if (type === ShowType.Img) {
    return (
      <>
        <TouchableHighlight onPress={() => setIsAvatorShow(true)}>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
            }}
            source={{
              uri: targetData,
            }}
          />
        </TouchableHighlight>
        <Modal visible={isAvatorShow} transparent={true}>
          <ImageViewer
            onClick={() => setIsAvatorShow(false)}
            imageUrls={[{url: targetData}]}
          />
        </Modal>
      </>
    );
  }
  if (type === ShowType.Text) {
    return (
      <Text
        style={{
          marginTop: 0,
        }}>
        {targetData}
      </Text>
    );
  }
  if (type === ShowType.Role) {
    return (
      <Text
        style={{
          marginTop: 0,
        }}>
        {RoleMap[targetData]}
      </Text>
    );
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserInfo: FC<any> = ({navigation}) => {
  return (
    <View style={User.Contain}>
      {userInfoMap?.map(item => {
        const targetData = MokcUserInfoData[item.key];
        return (
          <View style={User.CellItem as any} key={item.key}>
            <Text
              style={{
                marginTop: item.type === ShowType.Img ? 5 : 0,
              }}>
              {item.label}
            </Text>
            <CellComponent type={item.type} targetData={targetData} />
          </View>
        );
      })}
    </View>
  );
};

export default UserInfo;
