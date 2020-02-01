import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {Provider as PaperProvider} from 'react-native-paper';
import Store from './app/store/Store';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <Store>
        <App />
      </Store>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
