import React, {FC, useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {userLogin, getUserInfo} from '../../api/user/index';
import {saveUserToken, saveUserInfo} from '../../storage/user';

const LoginPage: FC<any> = ({navigationRef}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const Login = async () => {
    const {data, code, msg} = await userLogin({
      data: {
        username,
        password,
      },
    });
    console.log('data, code, msg', data, code, msg);
    if (code !== 0) {
      Alert.alert('登录失败', msg);
      return;
    }
    await saveUserToken(data.token);
    const {data: userInfo} = await getUserInfo(data.u_id);
    console.log('userInfo', userInfo);
    await saveUserInfo(userInfo);
    navigationRef.navigate('Main');
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        padding: '10%',
        height: '100%',
        paddingTop: '30%',
        paddingBottom: '30%',
      }}>
      <View
        style={{
          marginBottom: 10,
        }}>
        <Text
          style={{
            marginBottom: 5,
          }}>
          用户名
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
          }}
          onChangeText={text => setUserName(text)}
          value={username}
          textContentType="username"
          autoCapitalize="none"
        />
      </View>
      <View>
        <Text
          style={{
            marginBottom: 5,
          }}>
          密码
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            marginBottom: 10,
          }}
          onChangeText={text => setPassword(text)}
          value={password}
          textContentType="newPassword"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          backgroundColor: '#2296f3',
          borderRadius: 5,
        }}>
        <Button title="登录" color="#fff" onPress={() => Login()} />
      </View>
    </View>
  );
};

export default LoginPage;
