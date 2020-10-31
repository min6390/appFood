/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignInScreen from './src/screens/LoginScreen/signin/SignInScreen';

import {name as appName} from './app.json';
import SignUpScreen from './src/screens/LoginScreen/signup/SignUpScreen';

AppRegistry.registerComponent(appName, () => App);
