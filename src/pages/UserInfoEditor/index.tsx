import React, {FC, useEffect, useState} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import {updateUserInfo} from '../../api/user/index';
import {saveUserInfo} from '../../storage/user';

const UselessTextInput: FC<any> = props => {
  return <TextInput {...props} numberOfLines={5} editable maxLength={40} />;
};

export const UserInfoEditorHeadRight: FC<any> = ({navigationRef}) => {
  const [currentUserData, setCurrentUserData] = useState({});
  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const currentParams = navigationRef
        .getRootState()
        .routes.filter(
          (item: {name: string}) => item.name === 'UserInfoEditor',
        )?.[0]?.params;
      setCurrentUserData(currentParams?.UserInfoData);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <TouchableHighlight
      onPress={async () => {
        const res = await updateUserInfo({data: currentUserData});
        await saveUserInfo(res.data);
        navigationRef.navigate('UserInfo', {
          UserInfoData: res.data,
        });
      }}>
      <Text>完成</Text>
    </TouchableHighlight>
  );
};
const UserInfoEditor: FC<any> = props => {
  const {UserInfoData, currentKey} = props.route.params;
  const [inputValue, setInputValue] = useState(UserInfoData[currentKey]);
  return (
    <View
      style={{
        paddingTop: 5,
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 3,
          position: 'relative',
          height: '25%',
        }}>
        <UselessTextInput
          multiline={true}
          numberOfLines={5}
          onChangeText={(text: React.SetStateAction<string>) => {
            setInputValue(text);
            props.navigationRef.setParams({
              UserInfoData: {...UserInfoData, [currentKey]: text},
              currentKey,
            });
          }}
          value={inputValue}
        />
        <Text
          style={{
            position: 'absolute',
            bottom: 2,
            right: 2,
            color: '#cfcdcd',
          }}>
          {inputValue.length}
        </Text>
      </View>
    </View>
  );
};

export default UserInfoEditor;
