/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Layout from './components/Layout';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserInfo from './pages/UserInfo';
import HomeScreen from './pages/HomeScreen';
import TopicScreen from './pages/TopicScreen';
import Setting from './pages/Settings';
import {UserInfoEditorHeadRight} from './pages/UserInfoEditor';
import LoginPage from './pages/LoginPage';

import MyBack from './components/MyBack';
import UserInfoEditor from './pages/UserInfoEditor';

import {commonHeaderTitleStye} from './const/header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Main: FC<any> = ({navigationRef}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <Layout navigationRef={navigationRef}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={props => (
              <HomeScreen {...props} navigationRef={navigationRef} />
            )}
            options={{header: () => null}}
          />
          <Tab.Screen
            name="TopicScreen"
            component={props => (
              <TopicScreen {...props} navigationRef={navigationRef} />
            )}
            options={{header: () => null}}
          />
        </Tab.Navigator>
      </Layout>
    </SafeAreaView>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer ref={navigationRef}>
        {/* <Stack.Navigator initialRouteName="LoginPage"> */}
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
