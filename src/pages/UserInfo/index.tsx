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
import {ShowType, userInfoMap, RoleMap} from './userConfig';
import {getUserInfo} from '../../storage/user';
import {redirectLogin} from '../../utils/redirect';

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
        <TouchableHighlight
          underlayColor="#eee"
          onPress={() => setIsAvatorShow(true)}>
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
        underlayColor="#eee"
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
  if (type === ShowType.Disabled) {
    return (
      <Text
        style={{
          marginTop: 0,
          color: '#555',
        }}>
        {targetData}
      </Text>
    );
  }
  return null;
};

const UserInfo: FC<any> = ({navigationRef, route}) => {
  const [userInfo, setUserInfo] = useState<Record<string, any>>({});
  const getUserInfoFromstorage = async () => {
    const res = await getUserInfo();
    if (!res?.userInfo) {
      redirectLogin(navigationRef);
      return;
    }
    setUserInfo(res.userInfo);
  };
  useEffect(() => {
    getUserInfoFromstorage();
  }, [route.params]);

  return (
    <View style={User.Contain}>
      {userInfoMap?.map(item => {
        const targetData = userInfo[item.key];
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
              UserInfoData={userInfo}
              currentKey={item.key}
            />
          </View>
        );
      })}
    </View>
  );
};

export default UserInfo;
