import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Theme utility
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Images} from '../theme';

// Screens
import MainScreen from '../screens/MainScreen';
import GeneralInfoScreen from '../screens/GeneralInfoScreen';
import InfoScreen from '../screens/InfoScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContentScreen from '../screens/ContentScreen';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Güvendeyim"
        component={MainScreen}
        options={{
          title: 'Güvendeyim',
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
          },
          headerLeft: () => (
            <Image
              source={Images.logo}
              style={{width: 32, height: 35, marginHorizontal: 16}}
              resizeMode={'contain'}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const GeneralInfoStack = createStackNavigator();
function GeneralInfoStackScreen() {
  return (
    <GeneralInfoStack.Navigator>
      <GeneralInfoStack.Screen
        name="Temel Bilgiler"
        component={GeneralInfoScreen}
        options={{
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
          },
          headerTitleAlign: 'center',
        }}
      />
    </GeneralInfoStack.Navigator>
  );
}

const InfoStack = createStackNavigator();
function InfoStackScreen() {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen
        name="Bilgilendirme"
        component={InfoScreen}
        options={{
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
          },
          headerTitleAlign: 'center',
        }}
      />
    </InfoStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Ayarlar"
        component={SettingsScreen}
        options={{
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
          },
          headerTitleAlign: 'center',
        }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Ana Sayfa') {
              iconName = 'home';
            } else if (route.name === 'Bilgilendirme') {
              iconName = 'information';
            } else if (route.name === 'Temel Bilgiler') {
              iconName = 'book';
            } else if (route.name === 'Ayarlar') {
              iconName = 'settings';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.secondary,
          style: {borderTopWidth: 0},
        }}>
        <Tab.Screen name="Ana Sayfa" component={HomeStackScreen} />
        <Tab.Screen name="Temel Bilgiler" component={GeneralInfoStackScreen} />
        <Tab.Screen name="Bilgilendirme" component={InfoStackScreen} />
        <Tab.Screen name="Ayarlar" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
