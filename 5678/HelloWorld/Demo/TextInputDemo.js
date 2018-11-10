import React,{Component} from 'react';
import {TextInput} from 'react-native';
export default class TextInputDemo extends Component{
	render(){
		return(
			<TextInput style={baseStyle}
			/>
		);
	}
}
let baseStyle = {
	top:100,
	marginLeft:30,
	marginRight:30,
	height:100,
	borderWidth:1,
	borderColor:'gray'
}
