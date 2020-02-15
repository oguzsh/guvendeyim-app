import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Helpers, Fonts, Images, Colors} from '../../theme';

const Author = () => {
  return (
    <View style={[Helpers.rowCross, Helpers.mainSpaceBetween]}>
      <View style={[Helpers.rowCross, Helpers.mainStart]}>
        <Image
          source={Images.logo}
          style={styles.authorImage}
          resizeMode={'cover'}
        />

        <Text style={[styles.authorText, Fonts.h3, Helpers.textLeft]}>
          Akut | Arama Kurtarma Derneği
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authorText: {
    color: Colors.secondary,
    marginLeft: 8,
  },
  contentTitle: {
    marginVertical: 5,
    fontFamily: 'Roboto-Medium',
  },
  authorImage: {
    width: 32,
    height: 32,
    borderRadius: 200,
  },
});

export default Author;
