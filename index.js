import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import configureStore from './src/store/configureStore';
import App from './App';

const AppContainer = () => (
    <Provider store={configureStore()}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
