import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

// Colors
import Colors from '../../theme/Colors';

//Screens
import MainScreen from '../../screens/MainScreen';
import GeneralInfoScreen from '../../screens/GeneralInfoScreen';
import InfoScreen from '../../screens/InfoScreen';
import SettingsScreen from '../../screens/SettingsScreen';

// Routes
const HomeRoute = () => <MainScreen />;
const GeneralInfoRoute = () => <GeneralInfoScreen />;
const InfoRoute = () => <InfoScreen />;
const SettingsRoute = () => <SettingsScreen />;

export default class BottomNavigationBar extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'home', title: 'Ana Sayfa', icon: 'home'},
      {key: 'generalInfo', title: 'Temel Bilgiler', icon: 'book'},
      {key: 'info', title: 'Bilgilendirme', icon: 'information'},
      {key: 'settings', title: 'Ayarlar', icon: 'settings'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    generalInfo: GeneralInfoRoute,
    info: InfoRoute,
    settings: SettingsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        labeled={true}
        activeColor={Colors.primary}
        inactiveColor={Colors.secondary}
        style={styles.tabItem}
        barStyle={styles.barStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
    elevation: 0,
  },
});
