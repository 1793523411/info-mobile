import React, {FC} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const VideoCardStyle = {
  conatin: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 80,
    borderRadius: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  left: {
    width: '40%',
  },
  right: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginBottom: 5,
  },
  titleText: {
    fontSize: 16,
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
  },
};

// interface VideoCardProps {
//   //
// }

const VideoCard: FC<any> = props => {
  const cardClick = () => {
    props.navigationRef.navigate('VideoDetail');
  };
  return (
    <TouchableHighlight onPress={() => cardClick()} underlayColor="#eee">
      <View style={VideoCardStyle.conatin as any}>
        <View style={VideoCardStyle.left}>
          <Image
            style={VideoCardStyle.img}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={VideoCardStyle.right as any}>
          <View style={VideoCardStyle.title}>
            <Text style={VideoCardStyle.titleText}>Title</Text>
          </View>
          <View style={VideoCardStyle.author as any}>
            <Text>作者: </Text>
            <Text>ygj</Text>
          </View>
          <View style={VideoCardStyle.time as any}>
            <Text>时间: </Text>
            <Text>2021-1-1</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default VideoCard;
