import React, { Component } from 'react';
import {
  Button,
  View,
  ImagePickerIOS
} from 'react-native';

export default class ImagePickerIOSDemo extends Component{
	render(){
		return(
			<View>
				<Button title="OpenCamera" onPress={()=>{
					ImagePickerIOS.openSelectDialog({},()=>{
						console.log("success");
					},()=>{
						console.log("error");
					});
				}}/>
			</View>
		);
	}
}