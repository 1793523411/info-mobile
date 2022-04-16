import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

function LoginPage() {
  const [username, setUserName] = useState('');
  const [passrdssw, setPassword] = useState('');
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
          }}
          onChangeText={text => setPassword(text)}
          value={passrdssw}
          textContentType="newPassword"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

export default LoginPage;
