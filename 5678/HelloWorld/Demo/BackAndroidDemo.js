import React,{Component} from 'react';
import {BackAndroid,View,Button} from 'react-native';
export default class BackAndroidDemo extends Component{
	constructor(props){
		super(props);
		BackAndroid.addEventListener("hardwareBackPress",this.hander);
	}
	render(){
		return(
			<View>
				<Button title="remove" onPress={()=>{
					BackAndroid.removeEventListener("hardwareBackPress",this.hander);
				}}/>
				<Button title="EXIT" onPress={()=>{
					BackAndroid.exitApp();
				}}/>
			</View>
		);
	}
	hander(){
		console.log("goBack");
		return true;
	}
}
