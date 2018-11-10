import React, { Component } from 'react';
import {View,Button} from 'react-native';
export default class TimerDemo extends Component{
	render(){
		return(
			<View style={{marginTop:100}}>
				<Button title="timeout" onPress={()=>{
					this.timerOutId = setTimeout(()=>{
							console.log("timeout");
						},3000);
				}}/>
				<Button title="interval" onPress={()=>{
					this.intervalId = setInterval(()=>{
							console.log("interval");
						},3000);
				}}/>
			</View>
		);
	}

	componentWillUnmount(){
		this.timerOutId&&clearTimeout(this.timerOutId);
		this.intervalId&&clearInterval(this.intervalId);
	}
}