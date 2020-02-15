import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Author from '../Author';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Helpers, Images} from '../../theme';

const Card = props => {
  const navigation = useNavigation();
  const {index, title, content, image} = props;
  const paragraph = content.firstContent.paragraph;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('Content', {
          title: title,
          content: content,
          image: image,
          key: index,
        })
      }>
      <View style={[Helpers.colMain, Helpers.crossStretch, styles.card]}>
        <Author />
        <View
          style={[Helpers.row, Helpers.mainSpaceBetween, styles.cardContent]}>
          <View style={styles.cardContentArea}>
            <Text style={[Fonts.h2, styles.contentTitle]}>{title}</Text>
            <Text
              style={[styles.contentParagraph, Fonts.h3]}
              numberOfLines={4}
              ellipsizeMode={'tail'}>
              {paragraph}
            </Text>
          </View>
          <View style={[Helpers.mainCenter, styles.cardImage]}>
            <Image
              source={Images[image]}
              style={{width: 100, height: 100}}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 380,
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 16,
    marginVertical: 8,
    height: 200,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  contentTitle: {
    marginVertical: 5,
    fontFamily: 'Roboto-Medium',
  },
  cardContent: {
    marginVertical: 18,
    width: 260,
  },
  cardImage: {
    marginHorizontal: 10,
  },
});

export default Card;
