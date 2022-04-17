import React, {useEffect, useRef, useState} from 'react';
import {Animated, PanResponder, View} from 'react-native';
import AntdIcon from 'react-native-vector-icons/AntDesign';

const MySlid = () => {
  const [process] = useState(0);
  // const [panResponder, setPanResponder] = useState<number>(0);
  const pan = useRef<any>(new Animated.ValueXY()).current;
  const panResponderAnimate = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('onPanResponderGrant', pan.x._value);
        pan.setOffset({
          x: pan.x._value!,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;
  useEffect(() => {
    // const _panResponder = PanResponder.create({
    //   // 要求成为响应者：
    //   onStartShouldSetPanResponder: (evt, gestureState) => true,
    //   onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    //   onMoveShouldSetPanResponder: (evt, gestureState) => true,
    //   onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    //   onPanResponderGrant: (evt, gestureState) => {
    //     // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
    //     // gestureState.{x,y} 现在会被设置为0
    //   },
    //   onPanResponderMove: (evt, gestureState) => {
    //     // 最近一次的移动距离为gestureState.move{X,Y}
    //     // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
    //     console.log('onPanResponderMove');
    //   },
    //   onPanResponderTerminationRequest: (evt, gestureState) => true,
    //   onPanResponderRelease: (evt, gestureState) => {
    //     // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
    //     // 一般来说这意味着一个手势操作已经成功完成。
    //   },
    //   onPanResponderTerminate: (evt, gestureState) => {
    //     // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
    //   },
    //   onShouldBlockNativeResponder: (evt, gestureState) => {
    //     // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
    //     // 默认返回true。目前暂时只支持android。
    //     return true;
    //   },
    // });
    // setPanResponder(_panResponder);
  }, []);
  return (
    <View
      style={{
        width: '100%',
        height: 10,
        backgroundColor: '#ffffff0',
        position: 'relative',
        flexDirection: 'row',
        padding: 1,
        borderRadius: 5,
      }}>
      <Animated.View
        style={{
          height: '100%',
          // width: `${process}%`,
          width: pan.x,
          backgroundColor: '#f05454',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      />
      <Animated.View
        style={{
          height: '100%',
          width: `${100 - process}%`,
          backgroundColor: '#ccc',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
      <Animated.View
        style={{
          transform: [{translateX: pan.x}],
          zIndex: 1,
          position: 'absolute',
          left: `${process - 2}%`,
        }}
        {...panResponderAnimate.panHandlers}>
        <AntdIcon style={{}} name="smile-circle" size={11} color="#1dabfd" />
      </Animated.View>
    </View>
  );
};

export default MySlid;
