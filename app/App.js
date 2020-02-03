import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Components
import AppBar from './components/Appbar';
import BottomNavigationBar from './components/BottomNavigation';

import 'react-native-gesture-handler';
import {AppContainer} from './navigator/AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*
      <AppBar />
      <BottomNavigationBar />
      */}
      <AppBar />
      <AppContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});

export default App;
