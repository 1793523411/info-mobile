import React, {useEffect, useRef} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import MyVideo from '../../components/MyVideo/index';
import Orientation from 'react-native-orientation';

function VideoDetail() {
  const vRef = useRef<any>();

  useEffect(() => {
    Orientation.lockToPortrait();
    const initial = Orientation.getInitialOrientation();
    console.log('init', initial);
    if (initial === 'PORTRAIT') {
      // do something
    } else {
      // do something else
    }
    Orientation.addOrientationListener(orientation => {
      console.log('addOrientationListener orientation发生变化', orientation);
    });
    Orientation.addSpecificOrientationListener(specificOrientation => {
      console.log(
        ' addSpecificOrientationListenerorientation发生变化',
        specificOrientation,
      );
    });
  }, []);

  const changeLandscape = () => {
    Orientation.lockToLandscape();
  };
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '30%',
        backgroundColor: '#333',
      }}>
      <MyVideo ref={vRef} />
      <TouchableHighlight
        style={{
          marginTop: 30,
        }}
        onPress={() => {
          vRef.current.pausedClick();
        }}>
        <Text>pause</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          vRef.current.fullscreenClick();
        }}>
        <Text>fullscreen</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          vRef.current.seekClick(60);
        }}>
        <Text>seek</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          changeLandscape();
        }}>
        <Text>changeLandscape</Text>
      </TouchableHighlight>
    </View>
  );
}

export default VideoDetail;
