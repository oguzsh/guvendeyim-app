import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Fonts, Images, Colors} from '../../theme';

const Appbar = () => {
  return (
    <View style={style.container}>
      <View style={style.appBar}>
        <Image source={Images.logo} resizeMode={'contain'} style={style.icon} />
        <Text style={Fonts.h1}> Güvendeyim </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 56,
    elevation: 3,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  icon: {
    width: 32,
    height: 35,
    marginRight: 32,
  },
});

export default Appbar;
