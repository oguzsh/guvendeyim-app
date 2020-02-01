import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// Colors
import {Colors, Fonts, Helpers} from '../../theme';
// Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainScreen = () => {
  return (
    <View style={[styles.container, Helpers.spaceEvenlyCenter, Helpers.fill]}>
      <Text style={[Helpers.textCenter, Fonts.h2]}>
        Güvende olduğunuz bilgisini göndermek için aşağıdaki butona basınız.
      </Text>
      <TouchableOpacity
        style={[styles.buttonContainer, Helpers.center]}
        onPress={() => alert('hello')}>
        <View style={[styles.button, Helpers.center]}>
          <Icon name="check-circle" style={styles.buttonIcon} />
          <Text style={[styles.buttonText, Fonts.h1]}>GÜVENDEYİM</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.primary,
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  buttonContainer: {
    width: 300,
    height: 300,
    borderColor: Colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 300 / 2,
  },
  buttonText: {
    color: Colors.white,
    letterSpacing: 0.5,
    marginTop: 14,
  },
  buttonIcon: {
    color: Colors.white,
    fontSize: 72,
  },
});

export default MainScreen;
