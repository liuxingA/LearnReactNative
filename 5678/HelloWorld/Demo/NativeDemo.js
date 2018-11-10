import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {ToolsManager} from './ToolsManager';
export default class NativeDemo extends Component{
	constructor(props){
		super(props);
		this.state={
			color:'red'
		}
	}
	render(){
		// ToolsManager.printf("Jaki","珲少",(str)=>{
		// 	console.log(str);
		// });
		var promise = ToolsManager.println(true);
		promise.then((value)=>{
			console.log(value);
		},(error)=>{
			console.log(error);
		});
		return(	
			<View>
				<Text onPress={()=>{
					this.refs.text.setNativeProps({
							style:{color:'green'}
						});
					// this.setState({
					// 	color:'green'
					// });
				}} style={{top:200,fontSize:30,textAlign:"center",color:this.state.color}} ref="text">{this.props.text}</Text>
			</View>
		);
	}
}