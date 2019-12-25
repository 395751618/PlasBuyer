/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootNavigator from './js/test/test1.js';

AppRegistry.registerComponent(appName, () => RootNavigator);
