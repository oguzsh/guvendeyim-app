import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// Components
import AppBar from './components/Appbar';
import BottomNavigationBar from './components/BottomNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <BottomNavigationBar />
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
