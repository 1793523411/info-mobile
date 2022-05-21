import React, {FC} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

const VideoCardStyle = {
  conatin: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: 80,
    borderRadius: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
  },
  top: {
    marginBottom: 2,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  middle: {
    marginBottom: 5,
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
    marginRight: 10,
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
  },
};

// interface VideoCardProps {
//   //
// }

const TopCard: FC<any> = props => {
  const cardClick = () => {
    props.navigationRef.navigate('ArticleDetail');
  };
  return (
    <TouchableHighlight onPress={() => cardClick()} underlayColor="#eee">
      <View style={VideoCardStyle.conatin as any}>
        <View style={VideoCardStyle.top as any}>
          <View style={VideoCardStyle.title}>
            <Text style={VideoCardStyle.titleText}>Title</Text>
          </View>
        </View>
        <View style={VideoCardStyle.middle}>
          <Text>文章的描述，文章的描述，文章的描述</Text>
        </View>
        <View style={VideoCardStyle.bottom as any}>
          <View style={VideoCardStyle.author as any}>
            <Text style={{fontSize: 12}}>作者: </Text>
            <Text style={{fontSize: 12}}>ygj</Text>
          </View>
          <View style={VideoCardStyle.time as any}>
            <Text style={{fontSize: 12}}>时间: </Text>
            <Text style={{fontSize: 12}}>2021-1-1</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TopCard;
