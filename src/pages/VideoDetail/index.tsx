import React, {FC, useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {getVideoDetail, getVideoList} from '../../api/video';
import MyVideo from '../../components/MyVideo/index';
import VideoCard from '../../components/VideoCard';
import {redirectLogin} from '../../utils/redirect';
import _ from 'lodash';

const VideoDetail: FC<any> = props => {
  const vRef = useRef<any>();
  const [recordDetail, setRecordDetail] = useState<any>(null);
  const {rid} = props.route.params;
  const [videoList, setVideoList] = useState<any>([]);
  const requestVideoDetail = async (id: any) => {
    const res: any = await getVideoDetail({rid: id});
    if (res?.code !== 0) {
      redirectLogin(props.navigationRef);
    } else {
      setRecordDetail(res.data);
      console.log('res', res);
    }
  };
  const requestVideoList = async () => {
    const res: any = await getVideoList({
      data: {
        page: '1',
        pageSize: '20',
      },
    });
    if (res?.code !== 0) {
      redirectLogin(props.navigationRef);
    } else {
      setVideoList(
        _.shuffle(res.data.data)
          .filter((item: any) => item.vstatus === 'done')
          .filter(item => item.rid !== rid),
      );
      console.log('res', res);
    }
  };
  useEffect(() => {
    requestVideoList();
    requestVideoDetail(rid);
  }, []);
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
      }}>
      <View style={{height: '30%%'}}>
        {recordDetail?.vurl && <MyVideo ref={vRef} uri={recordDetail?.vurl} />}
      </View>

      <ScrollView style={{padding: 10, height: '70%'}}>
        {videoList?.map((item: any) => {
          return (
            <VideoCard
              {...props}
              videoItem={item}
              key={item?.rid + item?.vtime}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VideoDetail;
