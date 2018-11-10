import React,{Component} from 'react';
import {View,Text} from 'react-native';
export default class PropsDemo extends Component{
	render(){
		return(
			<View backgroundColor={this.props.bgColor}>
				<Text style={{marginTop:100,textAlign:'center',fontSize:24}}>{this.props.title}</Text>
			</View>
		);
	}
}
