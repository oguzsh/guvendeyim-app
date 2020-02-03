import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Screens
import MainScreen from '../screens/MainScreen';
import GeneralInfoScreen from '../screens/GeneralInfoScreen';
import NotificationScreen from '../screens/NotificationScreen';
import InfoScreen from '../screens/InfoScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    GeneralInfo: {
      screen: GeneralInfoScreen,
    },
    Info: {
      screen: InfoScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export const AppContainer = createAppContainer(TabNavigator);
