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
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Layout from './components/Layout';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const Home: FC<any> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details2');
        }}
      />
    </View>
  );
};

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const DetailsScreen: FC<any> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          navigation.navigate('Details2');
        }}
      />
    </View>
  );
};

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
            component={HomeScreen}
            options={{header: () => null}}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
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
            name="Home2"
            component={props => (
              <Home {...props} navigationRef={navigationRef} />
            )}
            options={{
              headerBackTitle: 'back',
            }}
          />
          <Stack.Screen
            name="Details2"
            component={props => <DetailsScreen {...props} />}
            options={{
              headerBackTitle: 'back',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
