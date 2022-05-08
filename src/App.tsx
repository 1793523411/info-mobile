/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './pages/Main';
import UserInfo from './pages/UserInfo';
import Setting from './pages/Settings';
import {UserInfoEditorHeadRight} from './pages/UserInfoEditor';
import LoginPage from './pages/LoginPage';
import VideoDetail from './pages/VideoDetail';

import MyBack from './components/MyBack';
import UserInfoEditor from './pages/UserInfoEditor';

import {commonHeaderTitleStye} from './const/header';
import {StatusBar, useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer ref={navigationRef}>
        {/* <Stack.Navigator initialRouteName="VideoDetail"> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={props => (
              <Main {...props} navigationRef={navigationRef} />
            )}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserInfo"
            component={props => (
              <UserInfo {...props} navigationRef={navigationRef} />
            )}
            options={{
              headerLeft: () => <MyBack navigationRef={navigationRef} />,
              title: '个人信息',
              headerTitleStyle: commonHeaderTitleStye,
            }}
          />
          <Stack.Screen
            name="UserInfoEditor"
            component={props => (
              <UserInfoEditor {...props} navigationRef={navigationRef} />
            )}
            options={{
              headerLeft: () => <MyBack navigationRef={navigationRef} />,
              headerRight: () => (
                <UserInfoEditorHeadRight navigationRef={navigationRef} />
              ),
              title: '编辑',
              headerTitleStyle: commonHeaderTitleStye,
            }}
          />
          <Stack.Screen
            name="Setting"
            component={props => <Setting {...props} />}
            options={{
              headerBackTitle: 'back',
            }}
          />
          <Stack.Screen
            name="LoginPage"
            component={props => (
              <LoginPage {...props} navigationRef={navigationRef} />
            )}
            options={{
              title: '用户登录',
              headerBackTitle: 'back',
              headerLeft: () => <></>,
            }}
          />
          <Stack.Screen
            name="VideoDetail"
            component={props => (
              <VideoDetail {...props} navigationRef={navigationRef} />
            )}
            options={{
              title: '视频详情',
              headerBackTitle: 'back',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
