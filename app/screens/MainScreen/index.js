import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Main Context
import {MainContext} from '../../store/Store';

// Colors
import {Colors, Fonts, Helpers} from '../../theme';

// Components
import MessageButton from '../../components/MessageButton';

const MainScreen = () => {
  const {state} = useContext(MainContext);

  return (
    <View style={[styles.container, Helpers.spaceEvenlyCenter, Helpers.fill]}>
      <Text style={[Helpers.textCenter, Fonts.h2]}>
        Güvende olduğunuz bilgisini göndermek için aşağıdaki butona basınız.
      </Text>
      <MessageButton phoneNumbers={state} message="hello" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default MainScreen;
