import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

// Main Context
import {MainContext} from '../../store/Store';

// Utilities
import {Colors, Fonts, Helpers, Images} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

MainScreen.navigationOptions = ({navigation}) => ({
  title: 'Güvendeyim',
  headerLeft: () => (
    <Image
      source={Images.logo}
      style={{width: 32, height: 35, marginHorizontal: 16}}
      resizeMode={'contain'}
    />
  ),
  headerRight: () => (
    <TouchableOpacity
      onPress={() => console.log(navigation.navigate('Notification'))}>
      <Icon name="notifications" size={24} color={Colors.secondary} />
    </TouchableOpacity>
  ),
});

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

export default MainScreen;
