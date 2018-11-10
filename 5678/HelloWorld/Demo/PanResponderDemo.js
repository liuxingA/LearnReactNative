import React, { Component } from 'react';
import {Text,View,PanResponder} from 'react-native';

export default class PanResponderDemo extends Component{
	constructor(props){
		super(props);
		this.state={
			state:"",
			position:{}
		}
		this.panResponder = PanResponder.create({
			onMoveShouldSetPanResponder:()=>true,
			onStartShouldSetPanResponder:()=>true,
			onPanResponderGrant:(e,gestureState)=>{
				this.setState({
					state:"触摸",
					position:{x:gestureState.moveX,y:gestureState.moveY},
					});
			},
			onPanResponderRelease:(e,gestureState)=>{
				this.setState({
					state:"抬起",
					position:{x:gestureState.moveX,y:gestureState.moveY},
					});
			},
			onPanResponderMove:(e,gestureState)=>{
				this.setState({
					state:"移动",
					position:{x:gestureState.moveX,y:gestureState.moveY},
					});
			}
		});
	}
	render(){
		return(
			<View style={{flex:1}} {...this.panResponder.panHandlers}>
				<Text style={{marginTop:100,textAlign:"center"}}>{this.state.state+"|"+this.state.position.x+"  "+this.state.position.y}</Text>
			</View>
		);
	}
}