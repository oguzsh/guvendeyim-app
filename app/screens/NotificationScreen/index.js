import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Helpers, Fonts, Colors} from '../../theme';

const NotificationScreen = () => {
  return (
    <View style={[styles.container, Helpers.spaceEvenlyCenter, Helpers.fill]}>
      <Text style={[Helpers.textCenter, Fonts.h2]}>
        Henüz bir bildirimiz yok.
      </Text>
    </View>
  );
};

NotificationScreen.navigationOptions = {
  title: 'Bildirimler',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  notificationIcon: {
    color: Colors.secondary,
    fontSize: 28,
    paddingHorizontal: 16,
  },
});

export default NotificationScreen;
