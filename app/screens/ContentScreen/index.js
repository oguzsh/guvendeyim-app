import * as React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Colors, Images} from '../../theme';

const ContentScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text> Hello </Text>
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

export default ContentScreen;
