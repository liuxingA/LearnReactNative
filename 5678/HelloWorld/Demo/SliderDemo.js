import React,{Component} from 'react';
import {Slider} from 'react-native';
export default class SliderDemo extends Component{
	render(){
		return(
			<Slider style={baseStyle}/>
		);
	}
}
let baseStyle = {
	top:100,
	marginLeft:30,
	marginRight:30
}
