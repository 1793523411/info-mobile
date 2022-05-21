import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import TopCard from '../../components/TopCard';

const TopListStyle = {
  contain: {
    padding: 10,
  },
};

const ArticleList: FC<any> = props => {
  return (
    <ScrollView style={TopListStyle.contain}>
      <TopCard {...props} />
      <TopCard {...props} />
      <TopCard {...props} />
      <TopCard {...props} />
      <TopCard {...props} />
      <TopCard {...props} />
      <TopCard {...props} />
    </ScrollView>
  );
};

export default ArticleList;
