import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Helpers, Images} from '../../theme';

const Card = props => {
  const navigation = useNavigation();
  const {index, title, content, image} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Content', {
          title: title,
          content: content,
          image: image,
          key: index,
        })
      }>
      <View style={[Helpers.colMain, Helpers.crossStretch, styles.card]}>
        <View style={[Helpers.rowCross, Helpers.mainSpaceBetween]}>
          <View style={[Helpers.rowCross, Helpers.mainStart]}>
            <Image
              source={Images.logo}
              style={styles.cardImage}
              resizeMode={'cover'}
            />

            <Text style={[styles.authorText, Fonts.h3, Helpers.textLeft]}>
              Akut | Arama Kurtarma Derneği
            </Text>
          </View>
        </View>
        <View
          style={[Helpers.row, Helpers.mainSpaceBetween, styles.cardContent]}>
          <View style={styles.cardContentArea}>
            <Text style={[Fonts.h2, styles.contentTitle]}>{title}</Text>
            <Text style={[styles.contentParagraph, Fonts.h3]}>{content}</Text>
          </View>
          <View style={Helpers.mainCenter}>
            <Image source={image} resizeMode={'contain'} />
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
  authorText: {
    color: Colors.secondary,
    marginLeft: 8,
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
    width: 32,
    height: 32,
    borderRadius: 200,
  },
});

export default Card;
