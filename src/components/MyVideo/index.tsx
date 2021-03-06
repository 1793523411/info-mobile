import React, {FC, useImperativeHandle, useState, forwardRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});

const MyVideo: FC<any> = (props, ref) => {
  const {uri} = props;
  console.log('=====>uri<=====', uri);
  // debugger;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videoRef, setVideoRef] = useState<Video | null>();
  // const videoRef = useRef();
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  useImperativeHandle(ref, () => ({
    pausedClick: () => {
      console.log('pausedClick', videoRef);
      if (videoRef) {
        console.log('videoRef', videoRef);
      }
      setPaused(!paused);
    },
    fullscreenClick: () => {
      console.log('fullscreenClick', videoRef);
      setFullscreen(!fullscreen);
      if (videoRef) {
        console.log('videoRef', videoRef);
        videoRef.presentFullscreenPlayer();
      }
    },
    seekClick: (second: number) => {
      if (videoRef) {
        videoRef.seek(second);
      }
    },
  }));
  return (
    <View>
      <Video
        // Can be a URL or a local file.
        source={{
          uri: uri,
        }}
        ref={r => {
          // console.log('r', r);
          if (r) {
            setVideoRef(r);
          }
        }}
        repeat={false}
        fullscreen={true}
        paused={paused}
        rate={1.0}
        controls={true}
        onEnd={() => {
          console.log('视频播放完成');
        }}
        onSeek={(e: any) => {
          console.log('视频拖动', e);
        }}
        // onProgress={(e: any) => {
        //   console.log('视频播放进度', e);
        // }}
        //  ref={(ref) => {
        //    this.player = ref
        //  }}                                      // Store reference
        //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
        //  onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default forwardRef(MyVideo as any);
