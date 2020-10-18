/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SignInScreen from './src/screens/SignInScreen';

import {name as appName} from './app.json';
import SignUpScreen from './src/screens/SignUpScreen';

AppRegistry.registerComponent(appName, () => SignUpScreen);
