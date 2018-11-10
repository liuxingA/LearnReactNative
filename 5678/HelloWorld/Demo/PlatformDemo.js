import React, { Component } from 'react';
import {Text,View,Platform,StyleSheet} from 'react-native';
export default class PlatformDemo extends Component{
	constructor(props){
		super(props);
		if (Platform.OS === "ios") {
			this.title = "ios";
		}else{
			this.title = "android";
		}
	}
	render(){
		return(
			<View style={{marginTop:100}}>
				<Text style={sty.text}>{this.title}</Text>
			</View>
		);
	}
}


var sty = StyleSheet.create({
	text:
	{
		color:Platform.select({
			ios:'red',
			android:'green'
		}),
		textAlign:'center',
		fontSize:24
	}
});