import React, { Component } from 'react';

import { View,Text } from 'react-native';
import {firebase} from '@react-native-firebase/auth';

// import styles from './styles';

export default class Loading extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Tab' : 'Login');
        });
    }

    render() {
    return (
      <View >
          <Text>Loading</Text>
      </View>
    );
  }
}
