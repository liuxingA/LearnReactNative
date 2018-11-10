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
import KeyboardDemo from './Demo/KeyboardDemo';
import NetDemo from './Demo/NetDemo';
import GeolocationDemo from './Demo/GeolocationDemo';
import AsyncStorageDemo from './Demo/AsyncStorageDemo';
import ClipboardDemo from './Demo/ClipboardDemo';
import NetInfoDemo from './Demo/NetInfoDemo';
import {AnimatedValueDemo,AnimatedValueXYDemo,SpringAnimatedValueXYDemo,InterpolationAnimatedValueDemo,CalculateAnimatedValueDemo,AnimatedGroupDemo,LayoutAnimationDemo,CustomAnimatedDemo} from './Demo/AnimatedDemo';
import PanResponderDemo from './Demo/PanResponderDemo';
import DimensionsDemo from './Demo/DimensionsDemo';
import PlatformDemo from './Demo/PlatformDemo';
import TimerDemo from './Demo/TimerDemo';
import NativeDemo from './Demo/NativeDemo';
import NativeViewDemo from './Demo/NativeViewDemo';
export default class HelloWorld extends Component {
  render() {
    return (
        <NativeViewDemo/>
    );
  }
}


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
