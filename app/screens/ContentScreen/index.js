import * as React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import Author from '../../components/Author';
import {Colors, Images, Fonts, Helpers} from '../../theme';

const ContentScreen = ({route, navigation}) => {
  const {title, content, image} = route.params;
  const firstContent = content.firstContent.paragraph;
  const secondContent = content.secondContent.paragraph;
  const thirdContent = content.thirdContent.paragraph;
  navigation.setOptions({title: title});
  return (
    <ScrollView>
      <View style={[styles.container, Helpers.textLeft]}>
        <Image
          source={Images[image]}
          resizeMode={'contain'}
          style={styles.contentImage}
        />
        <Author />
        <Text style={[Fonts.h1, styles.title]}>
          {content.firstContent.title}
        </Text>
        <Text style={(Helpers.textLeft, styles.paragraph)}>{firstContent}</Text>
        <Text style={[Fonts.h1, styles.title]}>
          {content.secondContent.title}
        </Text>
        <Text style={(Helpers.textLeft, styles.paragraph)}>
          {secondContent}
        </Text>
        <Text style={[Fonts.h1, styles.title]}>
          {content.thirdContent.title}
        </Text>
        <Text style={(Helpers.textLeft, styles.paragraph)}>{thirdContent}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 18,
  },
  contentImage: {
    width: 'auto',
    height: 250,
  },
  title: {
    marginVertical: 10,
  },
  paragraph: {
    lineHeight: 22,
    fontFamily: 'Roboto-Regular',
  },
});

export default ContentScreen;
