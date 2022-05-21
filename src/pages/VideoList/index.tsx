import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import VideoCard from '../../components/VideoCard';

const VideoListStyle = {
  contain: {
    padding: 10,
  },
};

const VideoList: FC<any> = props => {
  return (
    <ScrollView style={VideoListStyle.contain}>
      <VideoCard {...props} />
      <VideoCard {...props} />
      <VideoCard {...props} />
      <VideoCard {...props} />
      <VideoCard {...props} />
      <VideoCard {...props} />
    </ScrollView>
  );
};

export default VideoList;
