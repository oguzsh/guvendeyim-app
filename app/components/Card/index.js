import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Helpers, Images} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const _navigateContent = (itemId, itemTitle, itemContent, itemImage) => {
  this.props.navigation.navigate({
    routeName: 'Content',
    params: {
      title: itemTitle,
      content: itemContent,
      image: itemImage,
    },
    key: itemId,
  });
};

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
        })
      }>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={styles.cardLeft}>
            <Image
              source={Images.logo}
              style={{width: 32, height: 32, borderRadius: 200}}
              resizeMode={'cover'}
            />

            <Text style={[styles.authorText, Fonts.h3]}>
              Akut | Arama Kurtarma Derneği
            </Text>
          </View>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentArea}>
            <Text style={[Fonts.h2, styles.contentTitle]}>{title}</Text>
            <Text style={[styles.contentParagraph, Fonts.h3]}>{content}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={image} resizeMode={'contain'} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: 380,
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 16,
    marginVertical: 8,
    height: 200,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorText: {
    textAlign: 'left',
    color: Colors.secondary,
    marginLeft: 8,
  },
  cardLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentTitle: {
    marginVertical: 5,
    fontFamily: 'Roboto-Medium',
  },
  cardContent: {
    marginVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
  },
  imageContainer: {
    justifyContent: 'center',
  },
});

export default Card;
