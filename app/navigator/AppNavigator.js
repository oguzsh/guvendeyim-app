import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Theme utility
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../theme';
// Screens
import MainScreen from '../screens/MainScreen';
import GeneralInfoScreen from '../screens/GeneralInfoScreen';
import NotificationScreen from '../screens/NotificationScreen';
import InfoScreen from '../screens/InfoScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator(
  {
    Home: MainScreen,
    Notification: NotificationScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {elevation: 0},
      headerTitleStyle: {
        fontFamily: 'Roboto-Medium',
      },
    },
    navigationOptions: {
      title: 'Ana Sayfa',
    },
  },
);

const GeneralInfoStack = createStackNavigator(
  {
    GeneralInfo: GeneralInfoScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Temel Bilgiler',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontFamily: 'Roboto-Medium'},
      headerStyle: {elevation: 0},
    },
    navigationOptions: {
      title: 'Temel Bilgiler',
    },
  },
);

const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Bildirimler',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontFamily: 'Roboto-Medium'},
      headerStyle: {elevation: 0},
    },
  },
);

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Bilgilendirme',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontFamily: 'Roboto-Medium'},
      headerStyle: {elevation: 0},
    },
    navigationOptions: {
      title: 'Bilgilendirme',
    },
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Ayarlar',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontFamily: 'Roboto-Medium'},
      headerStyle: {elevation: 0},
    },
    navigationOptions: {
      title: 'Ayarlar',
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Info: InfoStack,
    GeneralInfo: GeneralInfoStack,
    Settings: SettingsStack,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => {
      return {
        tabBarIcon: ({tintColor}) => {
          const {routeName} = navigation.state;
          let myIcon;
          if (routeName === 'Home') {
            myIcon = 'home';
          } else if (routeName === 'Info') {
            myIcon = 'book';
          } else if (routeName === 'GeneralInfo') {
            myIcon = 'information';
          } else if (routeName === 'Settings') {
            myIcon = 'settings';
          }

          return <Icon name={myIcon} size={24} color={tintColor} />;
        },
        tabBarOptions: {
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.secondary,
          style: {borderTopWidth: 0},
        },
      };
    },
  },
);

export const AppContainer = createAppContainer(TabNavigator, NotificationStack);
