import React, { Component } from 'react';
import {Button,View,Vibration } from 'react-native';

export default class NetInfoDemo extends Component{
	render(){
		return(
			<View>
				<Button title="NetInfo" onPress={()=>{
					Vibration.vibrate([1000,3000,2000,1000],false);
				}}/>
			</View>
		);
	}
}