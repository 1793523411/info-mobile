import React, {FC, useEffect, useState} from 'react';
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
import {getUserInfo, userLogin} from '../../api/user/index';
import {saveUserToken, getUserToken} from '../../storage/user';

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

const CellComponent: FC<any> = ({
  type,
  targetData,
  navigationRef,
  UserInfoData,
  currentKey,
}) => {
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
      <TouchableHighlight
        onPress={() =>
          navigationRef.navigate('UserInfoEditor', {
            UserInfoData,
            currentKey,
          })
        }>
        <Text
          style={{
            marginTop: 0,
          }}>
          {targetData}
        </Text>
      </TouchableHighlight>
    );
  }
  if (type === ShowType.Role) {
    return (
      <Text
        style={{
          marginTop: 0,
          color: '#555',
        }}>
        {RoleMap[targetData]}
      </Text>
    );
  }
  return null;
};

const work = async () => {
  const res = await getUserInfo();
  console.log('res', res);
  saveUserToken('testToken');
  console.log(await getUserToken());
  setTimeout(async () => {
    console.log(await getUserToken());
  }, 10000);
  const loginRes = await userLogin({
    data: {
      username: 'ygj111',
      password: '123456',
    },
  });
  console.log('loginRes', loginRes);
};

const UserInfo: FC<any> = ({navigationRef}) => {
  useEffect(() => {
    work();
  }, []);

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
            <CellComponent
              type={item.type}
              targetData={targetData}
              navigationRef={navigationRef}
              UserInfoData={MokcUserInfoData}
              currentKey={item.key}
            />
          </View>
        );
      })}
    </View>
  );
};

export default UserInfo;
