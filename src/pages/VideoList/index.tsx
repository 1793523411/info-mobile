import React, {FC, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {getVideoList} from '../../api/video';
import VideoCard from '../../components/VideoCard';
import {redirectLogin} from '../../utils/redirect';

const VideoListStyle = {
  contain: {
    padding: 10,
  },
};

const VideoList: FC<any> = props => {
  const [videoList, setVideoList] = useState([]);
  const requestVideoList = async () => {
    const res: any = await getVideoList({
      data: {
        page: '1',
        pageSize: '99',
      },
    });
    if (res?.code !== 0) {
      redirectLogin(props.navigationRef);
    } else {
      setVideoList(
        res.data.data.filter((item: any) => item.vstatus === 'done'),
      );
      console.log('res', res);
    }
  };
  useEffect(() => {
    requestVideoList();
  }, []);
  return (
    <ScrollView style={VideoListStyle.contain}>
      {videoList.map((item: any) => {
        return (
          <VideoCard
            {...props}
            videoItem={item}
            key={item?.rid + item?.vtime}
          />
        );
      })}
    </ScrollView>
  );
};

export default VideoList;
