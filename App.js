import React, { Component } from 'react';
import { View } from 'react-native';
import Route from './src/route/Route';
// import styles from './styles';

export default class App extends Component {
  constructor(properties) {
    super(properties);
  }
  render() {
    return (
     <Route/>
    );
  }
}
