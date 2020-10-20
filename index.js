/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignInScreen from './src/screens/LoginScreen/SignInScreen';

import {name as appName} from './app.json';
import SignUpScreen from './src/screens/LoginScreen/SignUpScreen';

AppRegistry.registerComponent(appName, () => App);
