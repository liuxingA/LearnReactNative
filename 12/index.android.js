import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class RNView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            Welcome to ReactNative!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 整体js模块的名称
AppRegistry.registerComponent('ReactNativeModule', () => RNView);