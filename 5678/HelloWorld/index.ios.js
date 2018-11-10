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
import TextDemo from './Demo/TextDemo';
import ButtonDemo from './Demo/ButtonDemo';
import ImageDemo from './Demo/ImageDemo';
import SwitchDemo from './Demo/SwitchDemo';
import SliderDemo from './Demo/SliderDemo';
import ActivityIndicatorDemo from './Demo/ActivityIndicatorDemo';
import TextInputDemo from './Demo/TextInputDemo';
import StatusBarDemo from './Demo/StatusBarDemo';
import PickerDemo from './Demo/PickerDemo';
import ModalDemo from './Demo/ModalDemo';
import KeyboardAvoidingViewDemo from './Demo/KeyboardAvoidingViewDemo';
import ViewDemo from './Demo/ViewDemo';
import ScrollViewDemo from './Demo/ScrollViewDemo';
import ListViewDemo from './Demo/ListViewDemo';
import FlatListDemo from './Demo/FlatListDmeo';
import DatePickerIOSDemo from './Demo/DataPickerIOSDemo';
// import NavigatiorDemo from './Demo/NavigatiorDemo';
import {LayoutDemoOne,LayoutDemoTwo,LayoutDemoThree} from './Demo/LayoutDemo';
import AlertDemo from './Demo/AlertDemo';
import AlertIOSDemo from './Demo/AlertIOSDemo';
import ActionSheetIOSDemo from './Demo/ActionSheetIOSDemo';
import PropsDemo from './Demo/PropsDemo';
export default class HelloWorld extends Component {
  render() {
    return (<PropsDemo bgColor="red" title="我是标题"/>); 
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
