import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import Drawer from 'react-native-drawer';

const LayoutContain = StyleSheet.create({
  contain: {
    width: '100%',
    height: '100%',
    backgroundColor: '#A3E4DB',
  },
  header: {
    height: 35,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
  },
  headImg: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  drawer: {
    backgroundColor: '#fffffff9',
    height: '100%',
    width: '100%',
  },
});
const Layout: FC<any> = ({children, navigationRef}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    console.log('layout~~~');
  }, []);
  return (
    <View style={LayoutContain.contain}>
      <Drawer
        content={
          <View style={LayoutContain.drawer}>
            <TouchableHighlight
              onPress={() => {
                console.log('onPress');
                navigationRef.navigate('Settings');
                setModalVisible(false);
              }}>
              <Text>Go home</Text>
            </TouchableHighlight>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
            <Text>drawer</Text>
          </View>
        }
        open={modalVisible}
        type={'overlay'}
        openDrawerOffset={viewport => viewport.width * 0.35}
        tapToClose={true}
        onClose={() => setModalVisible(false)}
        panCloseMask={0.3}
        side={'left'}>
        <View style={LayoutContain.header}>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(true);
            }}>
            <Image
              style={LayoutContain.headImg}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </TouchableHighlight>
          <Text>title</Text>
        </View>
        {children}
      </Drawer>
    </View>
  );
};

export default Layout;
