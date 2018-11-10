/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NetDemo from './Demo/NetDemo';
import GeolocationDemo from './Demo/GeolocationDemo';
import AsyncStorageDemo from './Demo/AsyncStorageDemo';
import NetInfo from './Demo/NetInfoDemo';

import VibrationDemo from './Demo/VibrationDemo';
import AnimatedDemo,{AnimatedValue2DDemo,SpringAnimatedDemo,InterpolationAnimatedDemo,AnimatedCalculateDemo,
AnimatedGroupeDemo,AnimatedEventDemo,LayoutAnimationDemo} from './Demo/AnimatedDemo';
import PanResponderDemo from './Demo/PanResponderDemo';
import DimensionsDemo from './Demo/DimensionsDemo';
import PlatformDemo from './Demo/PlatformDemo';

export default class RN extends Component {
  render() {
    return (
      <PlatformDemo />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RN', () => RN);
