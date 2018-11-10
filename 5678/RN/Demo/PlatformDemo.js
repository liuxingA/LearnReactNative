import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

export default class PlatformDemo extends Component{
	constructor(props){
		super(props);
		if (Platform.OS==="ios") {
			this.title = "ios";
		}
		if (Platform.OS==="android"){
			this.title = "android";
		}
		console.log(Platform.Version);
	}

	render(){
		return(
			<View >
				<Text  style={sty.view}>{this.title}</Text>
			</View>
		);
	}
}

var sty = StyleSheet.create({
	view:{
		...Platform.select({
			default:{backgroundColor:'red',flex:1},
			ios:{marginTop:100,color:'blue',fontSize:24,textAlign:'center'},
			android:{marginTop:200,color:'green',fontSize:24,textAlign:'center'}			
		})
	}
});