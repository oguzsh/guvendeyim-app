import * as React from 'react';
import {View, FlatList} from 'react-native';
import {Helpers} from '../../theme';
import uuid from 'react-native-uuid';

// Components
import Card from '../../components/Card';
import Layout from '../../components/Layout';

import data from '../../data/data.json';

const _renderItem = ({item}) => {
  return (
    <Card
      index={uuid.v4()}
      title={item.title}
      content={item.content}
      image={item.image}
    />
  );
};

const GeneralInfoScreen = props => {
  return (
    <Layout>
      <View style={[Helpers.fill, Helpers.crossCenter]}>
        <FlatList
          keyExtractor={item => uuid.v4(item)}
          data={data}
          renderItem={_renderItem}
        />
      </View>
    </Layout>
  );
};

export default GeneralInfoScreen;
