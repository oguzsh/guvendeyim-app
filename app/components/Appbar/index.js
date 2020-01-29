import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Images, Colors} from '../../theme';
import {Appbar} from 'react-native-paper';

const AppBar = () => {
  return (
    <Appbar.Header style={style.appBar}>
      <Image source={Images.logo} style={style.icon} resizeMode={'contain'} />
      <Appbar.Content title="Güvendeyim" />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  appBar: {
    alignItems: 'center',
    elevation: 0,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  icon: {
    width: 32,
    height: 35,
  },
});

export default AppBar;
