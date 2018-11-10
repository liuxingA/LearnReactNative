import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

export default class TimerDemo extends Component{
	render(){
		return(
			<View style={{marginTop:100}}>
				<Button title="TimeOut" onPress={()=>{
					this.timerout=setTimeout(()=>{
						console.log("TimeOut");
					}, 3000);
				}}/>
				<Button title="TimeInterval" onPress={()=>{
					this.timeInterval=setInterval(()=>{
						console.log("setInterval");
						},3000);
				}}/>
			</View>
		);
	}

	componentWillUnmount(){
		this.timerout&&clearTimeout(this.timerout);
		this.timeInterval&&clearInterval(this.timeInterval);
	}
}