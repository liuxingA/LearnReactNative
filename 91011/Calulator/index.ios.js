/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import RootController from './Controller/RootController';

export default class Calulator extends Component {
  constructor(props){
    super(props);
    this.controller = new RootController();
  }

  render() {
    return <RootController />;
  }
}

AppRegistry.registerComponent('Calulator', () => Calulator);
