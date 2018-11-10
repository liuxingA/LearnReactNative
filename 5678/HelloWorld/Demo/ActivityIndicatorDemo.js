import React,{Component} from 'react';
import {ActivityIndicator} from 'react-native';
export default class ActivityIndicatorDemo extends Component{
	render(){
		return(
			<ActivityIndicator style={baseStyle}
			animating={true}
			color="red"
			size='large'/>
		);
	}
}
let baseStyle = {
	marginHorizontal:0,
	top:100
}
