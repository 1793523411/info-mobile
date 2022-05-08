import React, {useRef} from 'react';
import {View} from 'react-native';
import MyVideo from '../../components/MyVideo/index';

function VideoDetail() {
  const vRef = useRef<any>();

  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '30%',
        backgroundColor: '#333',
      }}>
      <MyVideo ref={vRef} />
    </View>
  );
}

export default VideoDetail;
