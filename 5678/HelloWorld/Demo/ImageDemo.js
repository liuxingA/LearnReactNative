import React,{Component} from 'react';
import {Image} from 'react-native';
export default class ImageDemo extends Component{
	render(){
		return(
			<Image source={require('../source/image.png')}/>
		);
	}
}
