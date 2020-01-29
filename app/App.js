import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput} from 'react-native';

// Components
import Appbar from './components/Appbar';
import BottomNavigation from './components/BottomNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar />
      <View style={styles.body}>
        <Text> Hoşgeldiniz </Text>
      </View>
      <BottomNavigation />
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
