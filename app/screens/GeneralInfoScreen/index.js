import * as React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Colors, Images} from '../../theme';
import uuid from 'react-native-uuid';

// Components
import Card from '../../components/Card';

import data from '../../data/data.json';

const _renderItem = ({item}) => {
  return (
    <Card
      index={uuid.v4()}
      title={item.title}
      content={item.content}
      image={Images[item.image]}
    />
  );
};

const GeneralInfoScreen = props => {
  return (
    <View style={[styles.container]}>
      <FlatList
        keyExtractor={item => uuid.v4(item)}
        data={data}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    flex: 1,
  },
});

export default GeneralInfoScreen;
