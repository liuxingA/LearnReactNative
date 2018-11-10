import React,{Component} from 'react';
import {View,Button,ToastAndroid} from 'react-native';
export default class ToastAndroidDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Toast Normal" 
						onPress={()=>{
							ToastAndroid.show("message info",ToastAndroid.SHORT);
						}}/>
				<Button title="Toast Gravity" 
						onPress={()=>{
							ToastAndroid.showWithGravity("message info",ToastAndroid.LONG,ToastAndroid.CENTER);
						}}/>		
			</View>
		);
	}
}
