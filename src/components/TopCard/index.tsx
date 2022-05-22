import dayjs from 'dayjs';
import React, {FC, useMemo} from 'react';
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
  const {
    articleItem: {topic_time, user_name, topic_body},
  } = props;
  const content = useMemo(() => {
    const data = JSON.parse(topic_body);
    return data;
  }, [topic_body]);
  const cardClick = () => {
    props.navigationRef.navigate('ArticleDetail');
  };
  return (
    <TouchableHighlight onPress={() => cardClick()} underlayColor="#eee">
      <View style={VideoCardStyle.conatin as any}>
        <View style={VideoCardStyle.top as any}>
          <View style={VideoCardStyle.title}>
            <Text style={VideoCardStyle.titleText}>{content.topicTitle}</Text>
          </View>
        </View>
        <View style={VideoCardStyle.middle}>
          <Text>{content.topicTag.join(',')}</Text>
        </View>
        <View style={VideoCardStyle.bottom as any}>
          <View style={VideoCardStyle.author as any}>
            <Text style={{fontSize: 12}}>作者: </Text>
            <Text style={{fontSize: 12}}>{user_name}</Text>
          </View>
          <View style={VideoCardStyle.time as any}>
            <Text style={{fontSize: 12}}>时间: </Text>
            <Text style={{fontSize: 12}}>
              {dayjs(Number(topic_time)).format('YYYY-MM-DD HH:mm')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TopCard;
