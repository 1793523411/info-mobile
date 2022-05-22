import React, {FC, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {getTopList} from '../../api/top';
import TopCard from '../../components/TopCard';
import {redirectLogin} from '../../utils/redirect';

const TopListStyle = {
  contain: {
    padding: 10,
  },
};

const ArticleList: FC<any> = props => {
  const [articleList, setArticleList] = useState([]);
  const requestVideoList = async () => {
    const res: any = await getTopList({
      data: {
        page: '1',
        pageSize: '20',
      },
    });
    if (res?.code !== 0) {
      redirectLogin(props.navigationRef);
    } else {
      setArticleList(res.data.data);
      console.log('res', res);
    }
  };
  useEffect(() => {
    requestVideoList();
  }, []);
  return (
    <ScrollView style={TopListStyle.contain}>
      {articleList.map((item: any) => {
        return (
          <TopCard
            {...props}
            articleItem={item}
            key={item?.rid + item?.vtime}
          />
        );
      })}
    </ScrollView>
  );
};

export default ArticleList;
