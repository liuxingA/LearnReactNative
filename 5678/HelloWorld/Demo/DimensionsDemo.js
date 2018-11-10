import React, { Component } from 'react';
import {View,Text,Dimensions} from 'react-native';
export default class DimensionsDemo extends Component{
	render(){
		return(<View>
			<Text style={{marginTop:100,fontSize:25,textAlign:'center'}}>{"屏幕尺寸 | "+"width:"+Dimensions.get("window").width+"   height:"+Dimensions.get("window").height}</Text>
		</View>);
		
	}
}