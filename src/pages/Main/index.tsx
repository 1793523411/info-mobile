import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import Layout from '../../components/Layout';
import ArticleList from '../ArticleList';
import HomeScreen from '../HomeScreen';
import TopicScreen from '../TopicScreen';
import VideoList from '../VideoList';

const Tab = createBottomTabNavigator();

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
          <Tab.Screen
            name="VideoList"
            component={props => (
              <VideoList {...props} navigationRef={navigationRef} />
            )}
            options={{
              header: () => null,
              tabBarLabel: '视频',
              tabBarIcon: ({focused}) => (
                <AntdIcon
                  name="videocamera"
                  size={25}
                  color={focused ? '#4790f0' : '#b4b3b3'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ArticleList"
            component={props => (
              <ArticleList {...props} navigationRef={navigationRef} />
            )}
            options={{
              header: () => null,
              tabBarLabel: '文章',
              tabBarIcon: ({focused}) => {
                return (
                  <>
                    <AntdIcon
                      name="switcher"
                      size={25}
                      color={focused ? '#4790f0' : '#b4b3b3'}
                    />
                  </>
                );
              },
            }}
          />
        </Tab.Navigator>
      </Layout>
    </SafeAreaView>
  );
};
export default Main;
