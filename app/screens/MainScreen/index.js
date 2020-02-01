import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Colors
import {Colors, Fonts, Helpers} from '../../theme';

// Components
import MessageButton from '../../components/MessageButton';

const MainScreen = () => {
  return (
    <View style={[styles.container, Helpers.spaceEvenlyCenter, Helpers.fill]}>
      <Text style={[Helpers.textCenter, Fonts.h2]}>
        Güvende olduğunuz bilgisini göndermek için aşağıdaki butona basınız.
      </Text>
      <MessageButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default MainScreen;
