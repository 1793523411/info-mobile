import dayjs from 'dayjs';
import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import ImageViewer from 'react-native-image-zoom-viewer';
import {getTopDetail} from '../../api/top';

const ArticleDetailStyle = {
  contain: {
    display: 'flex',
    flexDirection: 'column',
    // padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
  },
  tag: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  template: {
    padding: 10,
  },
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    // height: 100,
  },
  'p>br': {
    display: 'none',
  },
});

const ArticleDetail: FC<any> = props => {
  const {rid} = props.route.params;
  const [recordDetail, setRecordDetail] = useState<any>(null);
  const requestGetTopDetail = async (id: any) => {
    const res = await getTopDetail({rid: id});
    console.log('res', res);
    const obj = {
      ...res.data,
      ...JSON.parse(res.data.topic_body),
    };
    setRecordDetail(obj);
  };
  useEffect(() => {
    requestGetTopDetail(rid);
  }, [rid]);

  const [isModalShow, setModalVisible] = useState(false);

  const CustomArticle = (
    <View>
      <Text>
        <HTMLView value={recordDetail?.textValue} stylesheet={styles} />
      </Text>
    </View>
  );

  const TemplateArticle = (
    <View style={ArticleDetailStyle.template}>
      <Text>{recordDetail?.topicText}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {recordDetail?.topicImgList?.map((item: any) => {
          return (
            <TouchableHighlight
              underlayColor="#eee"
              style={{
                padding: 5,
              }}
              key={item.url}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 5,
                }}
                source={{
                  uri: item.url,
                }}
              />
            </TouchableHighlight>
          );
        })}
        <Modal visible={isModalShow} transparent={true}>
          <ImageViewer
            onClick={() => setModalVisible(false)}
            imageUrls={recordDetail?.topicImgList?.map((item: any) => {
              return {
                url: item.url,
              };
            })}
          />
        </Modal>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={ArticleDetailStyle.contain as any}>
        <View style={ArticleDetailStyle.title as any}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}>
            {recordDetail?.topicTitle}
          </Text>
        </View>
        <View style={ArticleDetailStyle.tag as any}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              paddingBottom: 5,
            }}>
            {`标签：${recordDetail?.topicTag.join(',')} 作者：${
              recordDetail?.user_name
            }`}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
            }}>
            {`时间：${dayjs(Number(recordDetail?.topic_time)).format(
              'YYYY-MM-DD HH:mm',
            )}`}
          </Text>
        </View>
        {recordDetail?.topic_type === 'custom'
          ? CustomArticle
          : TemplateArticle}
      </View>
    </ScrollView>
  );
};

export default ArticleDetail;
