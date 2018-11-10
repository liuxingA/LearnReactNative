import React, { Component } from 'react';
import {View,Text} from 'react-native';

export default class CustomView extends Component{
	render(){
		return(
			<View style={{marginTop:100,opacity:this.props.alpha}}>
				<Text style={{textAlign:'center',fontSize:24}}>自定义组件</Text>
			</View>
		);
	}
}