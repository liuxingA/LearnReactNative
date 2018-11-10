import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

export default class DimensionsDemo extends Component{
	render(){
		return(
			<View style={{paddingTop:100}}>
				<Text>{"屏幕尺寸信息"+Dimensions.get('window').width+"-"+Dimensions.get('window').height}</Text>
			</View>
		);
	}
}