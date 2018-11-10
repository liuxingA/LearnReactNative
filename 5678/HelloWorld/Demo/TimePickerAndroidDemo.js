import React,{Component} from 'react';
import {TimePickerAndroid,View,Button} from 'react-native';
export default class TimePickerAndroidDemo extends Component{
	render(){
		return(
			<View>
				<Button title="Time" onPress={()=>{
					TimePickerAndroid.open(
						{
							hour:22,
							minute:30,
							is24Hour:true
						}).then(({minute,hour,action})=>{
							console.log("success",minute,hour,action);
						},(fail)=>{
							console.log("fail",fail);
						});
				}}/>
			</View>
		);
	}	
}
