import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../theme/Colors';

const BottomNavigation = () => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="home" color={Colors.secondary} size={24} />
        <Text style={styles.tabTitle}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="assignment" color={Colors.secondary} size={24} />
        <Text style={styles.tabTitle}>Temel Bilgiler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="info" color={Colors.secondary} size={24} />
        <Text style={styles.tabTitle}>Bilgilendirme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="settings" color={Colors.secondary} size={24} />
        <Text style={styles.tabTitle}>Ayarlar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
    color: Colors.secondary,
    paddingTop: 4,
  },
});

export default BottomNavigation;
