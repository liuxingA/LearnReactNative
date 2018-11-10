import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
export default class CustomAnimatedView extends Component{
	render(){
		return(
			<View>
				<Text style={{marginTop:100,textAlign:'center',fontSize:24,opacity:this.props.opacity}}>自定义组件</Text>
			</View>
		);
	};
}
