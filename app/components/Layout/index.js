import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Colors} from '../../theme';

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 18,
    flex: 1,
  },
});

export default Layout;
