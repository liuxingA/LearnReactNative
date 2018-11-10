import React, { Component } from 'react';
import {
  Button,
  View,
  Vibration
} from 'react-native';

export default class VibrationDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Vibration" onPress={()=>{
					Vibration.vibrate([1000,2000,1000,2000],false);
				}}/>
			</View>
		);
	}
}